from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CampaignViewSet, TownListView

router = DefaultRouter()
router.register(r'campaigns', CampaignViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('towns/', TownListView.as_view(), name='town-list'),
]
