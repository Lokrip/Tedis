from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify

from server.models import (
    DateCreatedModel,
    DateUpdatedModel,
    ModelTitle
)

from server.models.status.product_status import (
    ProductAccessibilityStatus,
    ProductConditionStatus,
    ProductWarehouseStatus,
    ProductPromotionalStatus,
    ProductChecksStatus
)

from mptt.models import (
    MPTTModel,
    TreeForeignKey
)



class Category(MPTTModel, ModelTitle, DateCreatedModel):
    parent = TreeForeignKey(
        "self",
        on_delete=models.CASCADE,
        verbose_name=_("parent")
    )


class Product(DateCreatedModel, DateUpdatedModel, ModelTitle):
    """
    Product model represents an individual product in the system, which is associated with a user.
    It includes details such as the product's summary, accessibility status, and timestamps for when the product was created and last updated.

    Args:
        DateCreatedModel (_type_): A base model that provides a timestamp for when the product was created.
        DateUpdatedModel (_type_): A base model that provides a timestamp for when the product was last updated.
        ModelTitle (_type_): A base model that manages the product's title.

    Attributes:
        user (ForeignKey): The user associated with the product. It links to the AUTH_USER_MODEL and is a required field.
        summary (CharField): A short description of the product. It is optional and can be left blank.
        accessibility (CharField): The product's accessibility status, which can be one of the predefined choices from the ProductAccessibilityStatus enumeration. Defaults to 'COMING_SOON'.

    Returns:
        Product instance: A representation of the product with its attributes.
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name=_("product user")
    )
    summary = models.CharField(
        _("product summary"),
        max_length=30,
        blank=True,
        null=True
    )
    accessibility = models.CharField(
        _("product accessibility"),
        max_length=30,
        choices=ProductAccessibilityStatus.choices,
        default=ProductAccessibilityStatus.COMING_SOON
    )
    condition = models.CharField(
        _("product condition"),
        max_length=30,
        choices=ProductConditionStatus.choices,
        default=ProductConditionStatus.NEW
    )
    warehouse = models.CharField(
        _("product warehouse"),
        max_length=30,
        choices=ProductWarehouseStatus.choices,
        default=ProductWarehouseStatus.IN_WAREHOUSE
    )
    promotional = models.CharField(
        _("product promotional"),
        max_length=30,
        choices=ProductPromotionalStatus.choices,
        default=ProductPromotionalStatus.ON_SALE
    )
    checks = models.CharField(
        _("product checks"),
        max_length=30,
        choices=ProductChecksStatus.choices,
        default=ProductChecksStatus.UNDER_REVIEW
    )


    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         self.slug = f"{slugify(self.title)}-{}"


    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def __str__(self):
        return self.title

