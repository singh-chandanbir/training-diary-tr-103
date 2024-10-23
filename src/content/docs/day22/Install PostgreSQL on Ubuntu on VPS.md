---
title: Install PostgreSQL on Ubuntu on VPS
description: A guide in my new Starlight docs site.
---

Install PostgreSQL on Ubuntu
============================

Install PostgreSQL
------------------

Terminal window

    sudo apt updatesudo apt install postgresqlsudo service postgresql start # start the service

Check PostgreSQL is running
===========================

Terminal window

    sudo service postgresql status

Make sure the service is running

Use psql to connect to the database
===================================

Terminal window

    sudo -u postgres psql

This will open a CLI where you can run SQL commands.

After first launching psql, you may check the details of your connection by typing `\conninfo` into the interpreter.

Terminal window

    postgres=# \conninfoConnection to database "postgres" by user "postgres".    Host: localhost    Port: 5432    Username: postgres    Database: postgres    SSL off

List databases
==============

Terminal window

    postgres=# \l                                 List of databases   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges-----------+----------+----------+------------+------------+----------------------- postgres   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | template0  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +           |          |          |            |            | postgres=CTc/postgres template1  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +           |          |          |            |            | postgres=CTc/postgres(3 rows)

Create a database
=================

Terminal window

    postgres=# CREATE DATABASE mydb;CREATE DATABASE

List databases
==============

Terminal window

    postgres=# \l                                 List of databases   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges-----------+----------+----------+------------+------------+----------------------- mydb      | postgres | UTF8     | en_US.utf8 | en_US.utf8 | postgres   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | template0  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +           |          |          |            |            | postgres=CTc/postgres template1  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +           |          |          |            |            | postgres=CTc/postgres(4 rows)

List tables
===========

Terminal window

    postgres=# \dt                                     List of relations Schema | Name | Type  |  Owner-------+------+-------+---------- public | foo  | table | postgres public | bar  | table | postgres(2 rows)

Setup PostgreSQL server
=======================

Open the file `/etc/postgresql/<version>/main/postgresql.conf` and add the following lines:

    listen_addresses = '*'

This will allow connections from any IP address. This is not recommended for production environments.

Edit connection settings in `/etc/postgresql/<version>/main/pg_hba.conf`
========================================================================

Add the following lines:

    # Allow connections from any IP addresshost    all             all             0.0.0.0/0               md5

Restart the PostgreSQL server:
==============================

Terminal window

    sudo service postgresql restart# orsudo systemctl restart postgresql

This server will be accessible at `localhost:5432` if your backend server is running on the same machine. If you are running the backend server on a different machine, you will need to configure the `host` and `port` settings in the `.env` file.

[Previous  
Setup SSL in Nginx on Ubuntu](/ssl-in-nginx-ubuntu/)