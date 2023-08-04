from django.db import models

class Town(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

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
    town = models.ForeignKey(Town, on_delete=models.CASCADE)
    radius = models.PositiveIntegerField()
