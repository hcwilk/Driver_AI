# Generated by Django 5.0.4 on 2024-04-05 00:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0004_alter_codebase_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='codebase',
            name='url',
            field=models.TextField(),
        ),
    ]
