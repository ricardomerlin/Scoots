# Generated by Django 5.0.6 on 2024-05-20 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scootsapp', '0004_remove_question_question_set_remove_questionset_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pword',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=128, verbose_name='password'),
        ),
    ]
