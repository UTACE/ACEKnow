from django.views.generic import View
from django.conf import settings
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import os, json

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