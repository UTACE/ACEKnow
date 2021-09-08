from django.db import models
from django.contrib.auth.models import AbstractUser

import random
import base64
import datetime

CODE_COLOR = (
        ('G', 'Green'),
        ('Y', 'Yellow'),
        ('R', 'Red'),
        ('U', 'Unknown')
    )

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
    staff = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    healthCodeColor = models.CharField(max_length=1, choices=CODE_COLOR)
    override = models.BooleanField()
    scanTime = models.DateTimeField(auto_now=True)


class Person(models.Model):

    TEST_RESULT = (
        ('N', 'Negative'),
        ('P', 'Positive')
    )
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    vaccination_type = models.CharField(max_length=30, null=True, blank=True)
    last_dose_date = models.DateField(null=True, blank=True)
    wechat = models.CharField(max_length=30, unique=True)
    phone = models.CharField(max_length=30)
    neighborhood_id = models.CharField(max_length=5)
    emaill_address = models.CharField(max_length=50)
    flight_land_date = models.DateField(null=True, blank=True)
    manual_override = models.CharField(max_length=1, choices=CODE_COLOR, blank=True)

    last_test_result = models.CharField(max_length=1, choices=TEST_RESULT, null=True, blank=True)
    last_test_date = models.DateField(null=True, blank=True)

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

    def diffYellowandGreenCode(self, vaccines):
        currDate = datetime.date.today()
        if (vaccines["Total"] >= 3 or (vaccines["Total"] - vaccines["S"] >= 1 and vaccines["S"] >= 2)) and (
                currDate - self.last_dose_date).days >= 14:
            return {
                "color": 'G',
                "message": "You are fully-vaccinated.",
                "action": "Thanks for being fully-vaccinated!"
            }

        if self.last_test_date is not None:
            diff = currDate - self.last_test_date
            if self.last_test_result is not None and self.last_test_result == 'N' and diff.days <= 3:
                return {
                    "color": 'G',
                    "message": "You provided a negative COVID-19 test result within 3 days.",
                    "action": "Try to get vaccinated!"
                }

        return {
            "color": 'Y',
            "message": "You are not fully-vaccinated.",
            "action": "Please provide a negative PCR/antigen test result within 3 days to get a green health code. "
                      "Send a test result proof to health@utace.club"
        }

    def healthCodeColor(self):
        # If positive test last time, Return Red Immediately
        if self.last_test_result is not None and self.last_test_result == 'P':
            return {
                "color": 'R',
                "message": "You were tested COVID-19 positive before.",
                "action": "Please provide a negative PCR test result 14 days after your last positive COVID-19 test. "
                          "Send a test result proof to health@utace.club"
            }

        # Return Overrode Color if available
        if self.manual_override != "":
            return {
                "color": self.manual_override,
                "message": "Your result was manually overrode by the ACE health.",
                "action": "Contact ACE health official email if you think your health code color is incorrect."
            }

        currDate = datetime.date.today()
        vaccines = {"P": 0, "M": 0, "A": 0, "J": 0, "S": 0, "Total": 0}
        if self.vaccination_type != None:
            vaccines = self.countVaccineNum()

        # Fully vaccinated (Canada Approved) gives green code
        if (vaccines["P"] >= 2 or vaccines["M"] >= 2 or vaccines["A"] >= 2 or
            vaccines["P"] + vaccines["M"] + vaccines["A"] >= 2) and (currDate - self.last_dose_date).days >= 14:
            return {
                "color": 'G',
                "message": "You are fully-vaccinated.",
                "action": "Thanks for being fully-vaccinated!"
            }
        elif vaccines["J"] >= 1 and (currDate - self.last_dose_date).days >= 14:
            return {
                "color": 'G',
                "message": "You are fully-vaccinated.",
                "action": "Thanks for being fully-vaccinated!"
            }

        if self.flight_land_date is None:
            # If no international travel
            return self.diffYellowandGreenCode(vaccines)

        # If has international travel
        diff = currDate - self.flight_land_date

        if diff.days < 14:
            return {
                "color": 'R',
                "message": "You just had an international travel.",
                "action": "Complete your 14 days mandatory quarantine."
            }
        else:
            return self.diffYellowandGreenCode(vaccines)
