---
title: Rate Limiting in Nginx
description: A guide in my new Starlight docs site.
---

Adding Rate Limiting to the Server
----------------------------------

Nginx provides a simple way to add rate limiting using the `limit_req_zone` and `limit_req` directives.

1.  **Edit the main configuration file to define a rate limit zone:**
    
    Terminal window
    
        sudo nano /etc/nginx/nginx.conf
    
2.  **Add the following to the `http` block:**
    
        http {    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=2r/s;
            ...}
    
    The directive `limit_req_zone` is used in Nginx to define a shared memory zone that will be used to store the state of rate limits for incoming requests. Here’s a breakdown of the specific directive you provided:
    
        limit_req_zone $binary_remote_addr zone=mylimit:10m rate=2r/s;
    
    *   **`$binary_remote_addr`**: This is a variable that holds the client’s IP address in a binary format. Using the binary format saves memory, which is important when dealing with large numbers of requests.
        
    *   **`zone=mylimit:10m`**: This specifies the name and size of the shared memory zone used to store the state of rate limits.
        
    *   `mylimit` is the name of the zone.
        
    *   `10m` means that the size of the zone is 10 megabytes. This size dictates how many IP addresses and their request states can be stored in memory. A 10MB zone can typically store about 160,000 states (given that each state takes about 64 bytes).
        
    *   **`rate=2r/s`**: This sets the request rate limit.
        
    *   `2r/s` means that each IP address is allowed to make 2 requests per second.
        
    
    When you configure `limit_req_zone` in your Nginx configuration, it sets up a system to control how many requests a client can make to your server in a given time frame. This can help protect your server from being overwhelmed by too many requests from a single client, which can be a form of denial-of-service attack.
    
3.  **Edit your server block configuration to apply the rate limit:**
    
    Terminal window
    
        sudo nano /etc/nginx/sites-available/default
    
4.  **Add the following inside the `server` block:**
    
        server {    ...
            location / {        limit_req zone=mylimit burst=20 nodelay;        try_files $uri $uri/ =404;    }
            ...}
    
    *   **`limit_req zone=mylimit burst=20 nodelay;`**: This applies the rate limiting defined by the `mylimit` zone.
    *   `burst=20` allows a burst of up to 20 requests beyond the defined rate. **So, even if the rate limit is set to 2 requests per second, the burst allows up to 20 requests to be made in a second. The requests exceeding the rate limit will be rejected immediately.**
    *   `nodelay` means that requests that exceed the rate limit should be rejected immediately rather than delayed.
5.  **Test and reload Nginx:**
    
    Terminal window
    
        sudo nginx -tsudo systemctl reload nginx
    

[Previous  
Nginx Ubuntu Setup](/nginx-config/) [Next  
Deploy Node API and reverse proxy](/deploy-node-api-reverse-proxy/)