from django.contrib import admin
from .models import Company, Sale, Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'due_date', 'completed', 'is_recurring', 'recurrence_interval')

admin.site.register(Company)
admin.site.register(Sale)
admin.site.register(Task)
