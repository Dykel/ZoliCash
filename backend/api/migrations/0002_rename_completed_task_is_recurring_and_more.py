# Generated by Django 5.1.6 on 2025-02-23 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='completed',
            new_name='is_recurring',
        ),
        migrations.RemoveField(
            model_name='task',
            name='company',
        ),
        migrations.RemoveField(
            model_name='task',
            name='due_date',
        ),
        migrations.RemoveField(
            model_name='task',
            name='title',
        ),
        migrations.AddField(
            model_name='task',
            name='recurrence_interval',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
