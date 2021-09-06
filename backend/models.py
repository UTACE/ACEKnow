from django.db import models
from django.contrib.auth.models import AbstractUser

import random
import base64
import datetime


# Create your models here.
class CustomUser(AbstractUser):
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, null=True)

    def __str__(self):
        if self.organization is not None:
            return self.username + '/' + self.organization.name
        else:
            return self.username + '/' + "NA"


class Organization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=100)
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE)
    eventDate = models.DateField()

    def __str__(self):
        return str(self.organization) + "/" + self.name


class EventScan(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    person = models.ForeignKey('Person', on_delete=models.CASCADE)
    scanTime = models.DateTimeField(auto_now=True)


class Person(models.Model):
    CODE_COLOR = (
        ('G', 'Green'),
        ('Y', 'Yellow'),
        ('R', 'Red'),
        ('U', 'Unknown')
    )
    TEST_RESULT = (
        ('N', 'Negative'),
        ('P', 'Positive')
    )
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    vaccination_type = models.CharField(max_length=30, blank=True)
    last_dose_date = models.DateField(blank=True)
    wechat = models.CharField(max_length=30, unique=True)
    phone = models.CharField(max_length=30)
    neighborhood_id = models.CharField(max_length=5)
    emaill_address = models.CharField(max_length=50)
    flight_land_date = models.DateField(null=True, blank=True)
    manual_override = models.CharField(max_length=1, choices=CODE_COLOR, blank=True)

    last_test_result = models.DateField(null=True, blank=True)
    last_test_date = models.CharField(max_length=1, choices=TEST_RESULT, blank=True)

    revision = models.IntegerField(default=0)
    health_id = models.CharField(max_length=50, blank=True)

    def save(self, *args, **kwargs):
        if self.revision == 0:
            n1 = str(random.randint(100000, 999999))
            n2 = str(random.randint(100000, 999999))
            combination = self.first_name + n1 + self.last_name + n2
            combination_bytes = combination.encode("ascii")

            base64_bytes = base64.b64encode(combination_bytes)
            base64_string = base64_bytes.decode("ascii")

            self.health_id = str(base64_string)[:-2] + n2

        self.revision += 1

        super().save(*args, **kwargs)  # Call the "real" save() method.

    def __str__(self):
        return self.last_name + ", " + self.first_name

    def countVaccineNum(self):
        Vaccines = {"P": 0, "M": 0, "A": 0, "J": 0, "S": 0, "Total": 0}
        for i in range(len(self.vaccination_type)):
            if self.vaccination_type[i] == "P" or self.vaccination_type[i] == "p":
                Vaccines["P"] += 1
            elif self.vaccination_type[i] == "M" or self.vaccination_type[i] == "m":
                Vaccines["M"] += 1
            elif self.vaccination_type[i] == "A" or self.vaccination_type[i] == "a":
                Vaccines["A"] += 1
            elif self.vaccination_type[i] == "J" or self.vaccination_type[i] == "j":
                Vaccines["J"] += 1
            elif self.vaccination_type[i] == "S" or self.vaccination_type[i] == "s":
                Vaccines["S"] += 1
            Vaccines["Total"] += 1
        return Vaccines

    def healthCodeColor(self):
        # Return Overrode Color if available
        if self.manual_override != "":
            return self.manual_override

        vaccines = self.countVaccineNum()

        if vaccines["P"] >= 2 or vaccines["M"] >= 2 or vaccines["A"] >= 2 or \
                vaccines["P"] + vaccines["M"] + vaccines["A"] >= 2:
            return 'G'
        elif vaccines["J"] >= 1:
            return 'G'

        if self.flight_land_date is None:
            if vaccines["Total"] >= 2:
                return 'G'

            return 'Y'

        currDate = datetime.date.today()
        diff = currDate - self.flight_land_date

        if diff.days < 14:
            return 'R'
        else:
            if vaccines["Total"] >= 2:
                return 'G'
            return 'Y'
