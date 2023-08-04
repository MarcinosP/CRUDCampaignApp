from django.db import models

class Campaign(models.Model):
    STATUS_CHOICES = [
        ('ON', 'On'),
        ('OFF', 'Off'),
    ]

    name = models.CharField(max_length=255)
    keywords = models.TextField()
    bid_amount = models.DecimalField(max_digits=9, decimal_places=2, default=0.0)
    campaign_fund = models.DecimalField(max_digits=9, decimal_places=2, default=0.0)
    status = models.CharField(max_length=3, choices=STATUS_CHOICES, default='OFF')
    town = models.CharField(max_length=255)
    radius = models.PositiveIntegerField()