# Generated by Django 5.0.6 on 2024-05-20 17:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scootsapp', '0005_user_pword_alter_user_password'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='pword',
            new_name='k',
        ),
    ]
