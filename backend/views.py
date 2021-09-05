from django.views.generic import View
from django.conf import settings
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

import os, json

from rest_framework_simplejwt.tokens import RefreshToken

from .models import Person

class GetDebugInfoAPIView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        return Response(
            data={
                "debug": settings.DEBUG
            },
            status=status.HTTP_200_OK
        )

class LogoutView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


# Create your views here.
class GetUserInfoAPIView(APIView):
    def get(self, request):
        user = request.user.username
        print(user)
        return Response(data={
            "username": request.user.username
        },
            status=status.HTTP_200_OK)


class GetCovidDataAPIView(APIView):
    permission_classes = (permissions.AllowAny,)
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
    permission_classes = (permissions.AllowAny,)
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

class verifyHealthQRCode(APIView):
    def get(self, request, healthID):
        res = None
        try:
            res = Person.objects.get(health_id=healthID)
        except Person.DoesNotExist:
            return Response(
                data={
                    "color": "U"
                },
                status=status.HTTP_200_OK
            )

        code_color = res.healthCodeColor()
        return Response(
            data={
                "color": code_color
            },
            status=status.HTTP_200_OK
        )

class getHealthQRCode(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, healthID):
        res = None
        try:
            res = Person.objects.get(health_id=healthID)
        except Person.DoesNotExist:
            return Response(
                data={
                    "color": "U"
                },
                status=status.HTTP_200_OK
            )

        code_color = res.healthCodeColor()
        return Response(
            data={
                "color": code_color
            },
            status=status.HTTP_200_OK
        )

class verifyHealthQRCode(APIView):
    def get(self, request, healthID):
        return Response(
            data={
                "test": True
            },
            status=status.HTTP_200_OK
        )

# Create your views here.
class FrontendAppView(View):
    permission_classes = (permissions.AllowAny,)
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