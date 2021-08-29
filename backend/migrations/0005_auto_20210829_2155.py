# Generated by Django 3.0.7 on 2021-08-29 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20210828_2342'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='last_test_date',
            field=models.CharField(blank=True, choices=[('N', 'Negative'), ('P', 'Positive')], max_length=1),
        ),
        migrations.AddField(
            model_name='person',
            name='last_test_result',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='flight_land_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
