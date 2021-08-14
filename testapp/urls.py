from django.urls import path,include
from .api import *
import testapp.views

from .views import MeetingViewSet, ResultViewSet

urlpatterns = [
    path('meeting', MeetingViewSet.as_view({
        'get': 'list'
    })),
    path('meeting/create', MeetingViewSet.as_view({
        'post': 'create'
    })),
    path('meeting/<int:pk>', MeetingViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update'
    })),
    path('meeting/<int:pk>/delete', MeetingViewSet.as_view({
        'delete': 'destroy'
    })),

    path('result', ResultViewSet.as_view({
        'get': 'list'
    })),
    path('result/<int:pk>/create', ResultViewSet.as_view({
        'post': 'create'
    })),
    path('result/<int:pk>', ResultViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update'
    })),
]
