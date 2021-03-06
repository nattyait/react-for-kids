#!/bin/bash

sudo apt-get update
sudo apt-get -y install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get -y install ansible

cd /vagrant/
ansible-playbook playbook.yml
