# Generated by Django 3.2 on 2021-05-06 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('topic', models.TextField()),
                ('writer', models.CharField(max_length=30)),
                ('parties', models.TextField()),
                ('meeting_date', models.DateTimeField()),
                ('date', models.DateTimeField(auto_now=True)),
                ('file', models.FileField(upload_to='', verbose_name='media/')),
                ('script', models.TextField(null=True)),
                ('keyword', models.TextField(null=True)),
                ('summary', models.TextField(null=True)),
            ],
        ),
    ]
