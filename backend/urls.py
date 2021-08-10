from django.urls import path
from django.conf import settings

from .views import GetDebugInfoAPIView
from .views import PostAPIView

# url patterns
urlpatterns = [
    path('getDebugInfo/', GetDebugInfoAPIView.as_view(), name='get_debug_info'),
    path('posts/', PostAPIView.as_view())
]