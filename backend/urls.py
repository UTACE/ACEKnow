from django.urls import path
from django.conf import settings
from .views import GetDebugInfoAPIView, GetCovidDataAPIView

# url patterns
urlpatterns = [
    path('getDebugInfo/', GetDebugInfoAPIView.as_view(), name='get_debug_info'),
    path('getCovidData/', GetCovidDataAPIView.as_view(), name='get_covid_data')
]