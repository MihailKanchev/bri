# Generated by Django 4.1.3 on 2023-01-06 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_rename_name_customer_firstname_remove_product_image_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="description",
            field=models.TextField(default="", null=True),
        ),
    ]