# Generated by Django 3.2.7 on 2023-08-04 19:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('campaign', '0004_town_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='town',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='campaign.town'),
        ),
    ]
