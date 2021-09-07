from django.urls import path
from django.conf import settings
from rest_framework_simplejwt import views as jwt_views

from .views import GetDebugInfoAPIView, GetCovidDataAPIView, GetNeighborhoodDataAPIView, getHealthQRCode, \
    GetUserInfoAPIView, LogoutView, verifyHealthQRCode, getEventList, logScanRecord

# url patterns
urlpatterns = [
    path('getDebugInfo/', GetDebugInfoAPIView.as_view(), name='get_debug_info'),
    path('getCovidData/', GetCovidDataAPIView.as_view(), name='get_covid_data'),
    path('getNeighborhoodData/', GetNeighborhoodDataAPIView.as_view(), name='get_neighborhood_data'),
    path('getHealthQRCode/<str:healthID>/', getHealthQRCode.as_view(), name='get_health_qr_code'),
    path('verifyHealthQRCode/<str:healthID>/', verifyHealthQRCode.as_view(), name='verify_health_qr_code'),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('getUserInfo/', GetUserInfoAPIView.as_view(), name='get_user_info'),
    path('getEventList/', getEventList.as_view(), name='get_event_list'),
    path('logScanRecord/', logScanRecord.as_view(), name='log_scan_record'),
]