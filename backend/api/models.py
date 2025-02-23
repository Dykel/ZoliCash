from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    vat_number = models.CharField(max_length=20)
    fiscal_year_end = models.DateField()

class Sale(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    vat = models.DecimalField(max_digits=10, decimal_places=2, default=0.15)
    description = models.CharField(max_length=200)

class Task(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    due_date = models.DateField()
    completed = models.BooleanField(default=False)