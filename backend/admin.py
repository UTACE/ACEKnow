from django.contrib import admin

from .models import Person

# Register your models here.
# admin.site.register(Person)

@admin.register(Person)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "manual_override", "healthCodeColor")