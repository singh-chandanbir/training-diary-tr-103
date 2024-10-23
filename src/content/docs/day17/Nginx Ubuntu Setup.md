---
title: Nginx Ubuntu Setup
description: A guide in my new Starlight docs site.
---


Configuring Nginx on Ubuntu
---------------------------

1.  **Create a new server block configuration file:**
    
    Terminal window
    
        sudo vim /etc/nginx/sites-available/default
    
    _This command opens the default configuration file for editing._
    

Replace the file content with the following content:
----------------------------------------------------

    server {    listen 80;  # Listen on port 80, the default HTTP port    server_name localhost;  # The server name, here it is set to localhost
        root /var/www/html;  # The root directory where files are served from    index index.html index.htm;  # The default files to serve
        location / {        try_files $uri $uri/ =404;  # Try to serve the requested URI, if not found return a 404    }}

Create the document root directory if it doesn’t exist:
-------------------------------------------------------

Terminal window

    sudo mkdir -p /var/www/html

Terminal window

    sudo chown -R $USER:$USER /var/www/html

Terminal window

    sudo chmod -R 755 /var/www/html

Create the directory for the web root. Change ownership of the directory to the current user Set the permissions for the directory

Create a sample index.html file:
--------------------------------

Terminal window

    cd /var/www/html

Navigate to the web root directory

Terminal window

    touch index.html

Create an empty index.html file

Terminal window

    sudo vim index.html

Open the index.html file for editing

Add the following content to the index.html file:
-------------------------------------------------

    <html>  <head>    <title>Welcome to Nginx</title>  </head>  <body>    <h1>Hello, world!</h1>  </body></html>

Test the Nginx configuration
----------------------------

Terminal window

    sudo nginx -t

Test the Nginx configuration for syntax errors

Reload Nginx to apply the changes:
----------------------------------

Terminal window

    sudo systemctl reload nginx

Reload the Nginx service to apply the changes

[Previous  
Nginx Installation](/nginx-install/) [Next  
Rate Limiting in Nginx](/rate-limit-nginx/)