# Generated by Django 5.0.4 on 2024-04-05 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0003_alter_codebase_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='codebase',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]