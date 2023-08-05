from rest_framework import serializers
from .models import Campaign, Town

class TownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Town
        fields = '__all__'

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['town'] = {'id': instance.town.id, 'name': instance.town.name}
        return rep