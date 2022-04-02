from django.db import models

class entry(models.Model):
    ONESHOT = 'OS'
    CLASS = 'CL'
    CAMPAIGN = 'CA'
    MONSTER = 'MO'
    TYPE_CHOICES = [
        (ONESHOT, 'Oneshot'),
        (CLASS, 'Class'),
        (CAMPAIGN, 'Campaign'),
        (MONSTER, 'Monster'),
    ]
    TYPE = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default=ONESHOT,
    )
    name = models.CharField(max_length=50)
    desc = models.TextField()
