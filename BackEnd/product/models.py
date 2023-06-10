from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator

# Create your models here.

class Product(models.Model):
    owner=models.ForeignKey(get_user_model(),on_delete=models.CASCADE,null=True)
    name=models.CharField(max_length=50)
    description=models.TextField(blank=True)
    date=models.DateField(auto_now_add=True)
    rate=models.IntegerField(default=5)
    image=models.CharField(max_length=200,default='https://www.careeraddict.com/uploads/article/60419/entrepreneurship-product-ideas.png')
    price=models.FloatField()
    quantity=models.IntegerField(validators=[MinValueValidator(1)])
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='products')
    last_updated= models.DateTimeField(auto_now=True)
    orderCount = models.IntegerField(default=0)

# python -m pip install Pillow  -> run this command to accept the image

    def __str__(self):
        return self.name + ' from '+ str(self.category) + ' Category.'

    class Meta:
        ordering = ["-pk"]

class Category(models.Model):
    name= models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["-pk"]