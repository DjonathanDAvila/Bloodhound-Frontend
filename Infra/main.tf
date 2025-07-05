provider "azurerm" {
  features {}
}

resource "azurerm_static_web_app" "app" {
  name                = var.static_site_name
  location            = var.location
  resource_group_name = var.resource_group_name
  sku_tier            = "Free"
}
