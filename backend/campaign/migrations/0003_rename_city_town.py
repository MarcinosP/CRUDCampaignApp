# Generated by Django 3.2.7 on 2023-08-04 19:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaign', '0002_city'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='City',
            new_name='Town',
        ),
    ]
