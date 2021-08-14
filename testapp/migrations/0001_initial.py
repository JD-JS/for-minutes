from django.db import migrations, models
import django.db.models.deletion


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
                ('file', models.FileField(upload_to='audio/')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='photo/')),
            ],
        ),
        migrations.CreateModel(
            name='Result',
            fields=[
                ('meeting', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='testapp.meeting')),
                ('script', models.TextField()),
                ('keyword', models.TextField(blank=True, null=True)),
                ('summary', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
