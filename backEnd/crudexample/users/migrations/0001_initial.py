# Generated by Django 2.1.5 on 2019-01-06 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(max_length=20)),
                ('uname', models.CharField(max_length=20)),
                ('upass', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'userMaps',
            },
        ),
    ]
