# Generated by Django 5.0.6 on 2024-05-20 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scootsapp', '0002_tag_rename_name_questionset_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=255),
        ),
    ]
