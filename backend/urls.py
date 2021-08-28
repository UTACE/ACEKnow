from django.urls import path
from django.conf import settings
from .views import GetDebugInfoAPIView, GetCovidDataAPIView, GetNeighborhoodDataAPIView, getHealthQRCode

# url patterns
urlpatterns = [
    path('getDebugInfo/', GetDebugInfoAPIView.as_view(), name='get_debug_info'),
    path('getCovidData/', GetCovidDataAPIView.as_view(), name='get_covid_data'),
    path('getNeighborhoodData/', GetNeighborhoodDataAPIView.as_view(), name='get_neighborhood_data'),
    path('getHealthQRCode/<str:healthID>/', getHealthQRCode.as_view(), name='get_health_qr_code'),
]