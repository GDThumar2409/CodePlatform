# Generated by Django 3.0.5 on 2020-04-07 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=10)),
                ('first_name', models.CharField(max_length=15)),
                ('last_name', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('role', models.CharField(choices=[('adm', 'Admin'), ('fac', 'Faculty'), ('usr', 'User')], default='usr', max_length=3)),
            ],
        ),
    ]