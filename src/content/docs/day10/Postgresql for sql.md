---
title: Postgresql for sql
description: A guide in my new Starlight docs site.
---



* * *

> If you want to install postgresql on your local machine via Docker, please refer to the [Postgresql Installation](/docs/devOps-stuff/postgresql-installation) section.

* * *

Chapter 2: Setting Up PostgreSQL
================================

Installing PostgreSQL
---------------------

1.  **Windows**: Download the PostgreSQL installer from the official site.
    
2.  **Mac**: Use Homebrew:
    
    Terminal window
    
        brew install postgresql
    
3.  **Linux**: Use the official PostgreSQL installer.
    
    Terminal window
    
        sudo apt install postgresql
    
4.  **Docker**: Use the official PostgreSQL Docker image.
    

Setting up a PostgreSQL Database
--------------------------------

### Step 1: Start the PostgreSQL Service

Start the PostgreSQL service to ensure it’s running on your system:

Terminal window

    sudo service postgresql start

Step 2: Create a Database
-------------------------

create a new database for your chai and city date:

Terminal window

    createdb chai_and_city

this creates a new database called `chai_and_city` in postgresql.

Step 3: Connecting to the Database
----------------------------------

connecting to your newly created database using PostgreSQL command line interface:

Terminal window

    psql -d chai_and_city

this will prompt you to enter your password. Enter your password. Here -d is a flag that specifies the database you want to connect to.

Once connected, you can start using PostgreSQL commands that we will learn in next chapter.

Connecting to PostgreSQL with pgAdmin
-------------------------------------

pgAdmin is a graphical interface for managing PostgreSQL databases. Follow these steps to connect and manage your database using pgAdmin:

*   Download and Install pgAdmin: Go to the official pgAdmin website and install it for your operating system.
    
*   Connect to your local PostgreSQL Server: Open pgAdmin and create a new server connection. For the host name, use localhost and enter your PostgreSQL username and password.
    
*   Create a Database: Right-click on your server in pgAdmin, select “Create,” and choose “Database.” Name the database chai\_and\_cities.
    
*   Manage Data Visually: You can now use pgAdmin’s graphical interface to create tables, insert data, and run queries
    

Summary
-------

In this chapter, we learned how to install PostgreSQL and set up a database. We also learned how to connect to the database using PostgreSQL command line interface and pgAdmin. By the end of this chapter, you should have a good understanding of how to set up and manage a PostgreSQL database.

