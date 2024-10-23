---
title: Setup SSL in Nginx on Ubuntu
description: A guide in my new Starlight docs site.
---


Setting Up SSL for Nginx on Ubuntu with Certbot
-----------------------------------------------

This guide will help you set up SSL for your Nginx server on Ubuntu using Certbot. We will use a subdomain from GoDaddy, and the steps include installing Certbot, configuring Nginx, and generating an SSL certificate.

### 1\. Install Certbot and the Nginx Plugin

First, install Certbot and the Nginx plugin using the following command:

Terminal window

    sudo apt install certbot python3-certbot-nginx

### 2\. Configure Nginx

Edit your Nginx configuration file to include your server name. Open the file with a text editor:

Terminal window

    sudo vim /etc/nginx/sites-available/default

Add your subdomain in the `server_name` directive:

    server {    ...    server_name test.chaicode.com;    ...}

Save the file and exit the editor. Then, test your Nginx configuration:

Terminal window

    sudo nginx -t

### 3\. Create an A Record in Your Domain Registrar

Log in to your domain registrar (e.g., GoDaddy) and create an `A` record pointing to the IP address of your server.

*   **Record Type:** A
*   **Name:** test.chaicode.com
*   **Value:** _IPv4 address of the server_

NOTE: Its always a good idea to create a elastic/static IP for your server. This will make sure that your IP address doesn’t change on restart or reboot.

### 4\. Obtain an SSL Certificate

Run Certbot to obtain an SSL certificate for your subdomain:

Terminal window

    sudo certbot --nginx -d test.chaicode.com

Follow the prompts:

1.  Enter the email address associated with your domain registrar account.
2.  Accept the terms of service.
3.  Press Enter to continue.

Certbot will automatically configure your Nginx to use the new certificate. You should see a message indicating that the certificate was successfully issued.

![Certificate Issued](https://wajeshubham-portfolio.s3.ap-south-1.amazonaws.com/Screenshot+2024-07-10+001416.png)

### 5\. Access Your Site

You can now access your site using HTTPS:

Terminal window

    https://test.chaicode.com

![Site Access](https://wajeshubham-portfolio.s3.ap-south-1.amazonaws.com/Screenshot+2024-07-10+001500.png)

### 6\. Renewing the Certificate

To check if the certificate is close to expiring, run:

Terminal window

    sudo certbot renew --dry-run

To renew the certificate, run:

Terminal window

    sudo certbot renew

This guide ensures that your Nginx server is secured with SSL, making your site accessible over HTTPS.

[Previous  
Deploy Node API and reverse proxy](/deploy-node-api-reverse-proxy/) [Next  
Install PostgreSQL on Ubuntu on VPS](/postgres-vps-ubuntu/)