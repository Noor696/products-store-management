# Generated by Django 4.2.2 on 2023-06-07 20:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_product_export_to_csv_product_last_updated'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='export_to_CSV',
        ),
    ]
