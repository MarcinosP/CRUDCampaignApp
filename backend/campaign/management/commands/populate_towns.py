from django.core.management.base import BaseCommand, CommandError
from campaign.models import Town,Campaign
import json

class Command(BaseCommand):
    help = 'Populate the Town model from a JSON file'

    def handle(self, *args, **options):
        Town.objects.all().delete()
        # Campaign.objects.all().delete()
        try:
            with open('campaign/management/commands/towns.json', 'r') as file:
                data = json.load(file)
                for item in data:
                    Town.objects.create(name=item['name'] )
                self.stdout.write(self.style.SUCCESS('Successfully populated Town model'))
        except FileNotFoundError:
            raise CommandError('JSON file not found')