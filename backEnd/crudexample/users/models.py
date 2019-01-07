from django.db import models  
class UserModel(models.Model):  
    uid = models.CharField(max_length=20) 
    uname = models.CharField(max_length=20)  
    upass = models.CharField(max_length=20)
    class Meta:  
        db_table = "userDetails"