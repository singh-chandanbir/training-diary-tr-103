---
title: Nginx Installation
description: A guide in my new Starlight docs site.
---

Nginx Installation
==================

Nginx is a popular open-source web server that can be used to serve static files, dynamic content, and proxy requests to other servers. It is known for its high performance, scalability, and security.

In this tutorial, we will learn how to install Nginx on any VPS.

Prerequisites
-------------

Before installing Nginx, make sure you have the following prerequisites:

*   A server with root access
*   A domain name or IP address
*   A web server that can be used to serve static files

Installing Nginx on Ubuntu
--------------------------

To install Nginx on Ubuntu, follow these steps:

### Update the package index:

Terminal window

    sudo apt update

Install Nginx:
--------------

Terminal window

    sudo apt install nginx

Start and enable Nginx:
-----------------------

Terminal window

    sudo systemctl start nginxsudo systemctl enable nginx

Verify the installation:
------------------------

Open your web browser and navigate to `http://your_server_ip`. You should see the Nginx default welcome page.

[Previous  
Server Setup and Hardening](/server-setup/) [Next  
Nginx Ubuntu Setup](/nginx-config/)