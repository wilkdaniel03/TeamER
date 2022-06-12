terraform {
  required_providers {
    linode = {
      source  = "linode/linode"
      version = "~> 1.27.0"
    }
  }
  required_version = "~> 1.3.0"
}

provider "linode" {
  token = var.token
}

resource "linode_instance" "vm" {
  label     = "node"
  image     = "linode/ubuntu21.04"
  region    = "eu-west"
  type      = "g6-nanode-1"
  root_pass = "terr4form-test"
}
