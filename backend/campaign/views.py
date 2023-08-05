from rest_framework import viewsets
from .models import Campaign, Town
from .serializers import CampaignSerializer, TownSerializer
from rest_framework.generics import ListAPIView

class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all().order_by('name')
    serializer_class = CampaignSerializer

class TownListView(ListAPIView):
    queryset = Town.objects.all()
    serializer_class = TownSerializer