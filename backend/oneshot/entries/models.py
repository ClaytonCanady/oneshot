from django.db import models
from django.db.models import IntegerField, Model
from django.core.validators import MaxValueValidator, MinValueValidator

class oneshot(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()

class campaign_setting(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()
    

class character_class(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()


class monster(models.Model):
    name = models.CharField(max_length=50)
    strength = IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(30),
        ]
    )
    deterity =IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(30),
        ]
    )
    constitution = IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(30),
        ]
    )
    intelligence = IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(30),
        ]
    )
    wisdom = IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(30),
        ]
    )
    charisma = IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(30),
        ]
    )
    desc = models.TextField()