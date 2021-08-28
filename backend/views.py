from django.views.generic import View
from django.conf import settings
from django.http import HttpResponse, FileResponse
from qrcode.image.styles.colormasks import RadialGradiantColorMask
from qrcode.image.styles.moduledrawers import CircleModuleDrawer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import os, json
import qrcode
from qrcode.image.styledpil import StyledPilImage

class GetDebugInfoAPIView(APIView):
    def get(self, request):
        return Response(
            data={
                "debug": settings.DEBUG
            },
            status=status.HTTP_200_OK
        )


class GetCovidDataAPIView(APIView):
    def get(self, request):
        with open('backend/covid_data/covid_data.json', 'r') as covidDataFile:
            covidData = covidDataFile.read()
            covidJson = json.loads(covidData)

            return Response(
                data={
                    "data": covidJson
                },
                status=status.HTTP_200_OK
            )

class GetNeighborhoodDataAPIView(APIView):
    def get(self, request):
        with open('backend/covid_data/neighborhood.json', 'r') as neighborhoodDataFile:
            neighborhoodData = neighborhoodDataFile.read()
            neighborhoodData = json.loads(neighborhoodData)

            return Response(
                data={
                    "data": neighborhoodData
                },
                status=status.HTTP_200_OK
            )

class getHealthQRCode(APIView):
    GreedCodeColorMask = RadialGradiantColorMask(
        back_color=(255, 255, 255),
        center_color=(0, 255, 0),
        edge_color=(0, 200, 0)
    )

    YellowCodeColorMask = RadialGradiantColorMask(
        back_color=(255, 255, 255),
        center_color=(255, 255, 0),
        edge_color=(255, 225, 0)
    )

    RedCodeColorMask = RadialGradiantColorMask(
        back_color=(255, 255, 255),
        center_color=(255, 0, 0),
        edge_color=(225, 0, 0)
    )

    GrayCodeColorMask = RadialGradiantColorMask(
        back_color=(255, 255, 255),
        center_color=(100, 100, 100),
        edge_color=(80, 80, 80)
    )


    def get(self, request, healthID):
        print(healthID)

        mod_qrcode = qrcode.QRCode(
            version=2, box_size=10,
            border=1,
        )
        mod_qrcode.add_data(r'https://aceknow.utace.club/api/verifyQRCode/' + healthID + '/')
        mod_qrcode.make(fit=True)
        qrcode_image = mod_qrcode.make_image(image_factory=StyledPilImage,
                                             module_drawer=CircleModuleDrawer(),
                                             embeded_image_path="./static/logo_268.png",
                                             color_mask=self.GreedCodeColorMask)
        qrcode_image.save('temp/healthQR.png')

        img = open('temp/healthQR.png', 'rb')
        response = FileResponse(img)
        return response

# Create your views here.
class FrontendAppView(View):
    def get(self, request):
        print(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            print('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )