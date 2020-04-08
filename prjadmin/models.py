from django.db import models

# Create your models here.

class User(models.Model):
    ADMIN = 'adm'
    FACULTY = 'fac'
    USER = 'usr'
    ROLE_CHOICES = [
        (ADMIN, 'Admin'),
        (FACULTY, 'Faculty'),
        (USER, 'User'),
    ]
    user_id = models.AutoField(primary_key=True)
    password = models.CharField(max_length = 10)
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 15)
    email = models.EmailField()
    role = models.CharField(max_length=3,choices=ROLE_CHOICES,default=USER)
