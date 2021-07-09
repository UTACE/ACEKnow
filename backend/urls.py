from django.urls import path
from django.conf import settings
from .views import GetDebugInfoAPIView

# url patterns
urlpatterns = [
    path('getDebugInfo/', GetDebugInfoAPIView.as_view(), name='get_debug_info'),
]