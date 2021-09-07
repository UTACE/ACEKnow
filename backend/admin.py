from django.contrib import admin

from .models import Person, CustomUser, Organization, Event, EventScan

# Register your models here.
# admin.site.register(Person)

class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser
    list_display = ('username', 'organization', 'is_superuser', 'is_staff')

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.site_header = 'ACEKnow Admin'


@admin.register(Person)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "emaill_address", "manual_override")
    search_fields = [
        "wechat__exact",
        "emaill_address__exact",
    ]

@admin.register(Organization)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("name",)

@admin.register(Event)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("name", "organization", "eventDate")

@admin.register(EventScan)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("event", "person", "scanTime")