variable "resource_group_name" {
  type = string
}

variable "location" {
  type    = string
  default = "eastus2"
}

variable "static_site_name" {
  type = string
}

variable "repository_url" {
  type = string
}

variable "branch" {
  type    = string
  default = "main"
}

variable "github_token" {
  description = "GitHub personal access token"
  type        = string
  sensitive   = true
}

variable "app_location" {
  type    = string
  default = "."
}

variable "output_location" {
  type = string
}