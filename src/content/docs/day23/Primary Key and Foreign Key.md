---
title: Primary Key and Foreign Key
description: A guide in my new Starlight docs site.
---


Chapter 5: SQL Joins and Keys
=============================

In relational databases, **joins** are used to combine rows from two or more tables based on a related column between them. There are several types of joins, each designed for specific purposes. Joins are a way to combine data from multiple tables to create a single result set.

Types of Joins
--------------

There are several types of joins, each designed for specific purposes. Here are some common types of joins:

*   **Inner Join**: Used to combine rows from two tables based on a related column between them. It returns only the rows that have matching values in both tables.

> Only rows that have matching values in both tables are returned.

*   **Left Join**: Used to combine rows from two tables based on a related column between them. It returns all rows from the left table, and the matching rows from the right table.

> If there are no matching rows in the right table, NULL values are returned for the columns from the right table.

*   **Right Join**: Used to combine rows from two tables based on a related column between them. It returns all rows from the right table, and the matching rows from the left table.

> If there are no matching rows in the left table, NULL values are returned for the columns from the left table.

*   **Full Join**: Used to combine rows from two tables based on a related column between them. It returns all rows from both tables, and the matching rows from both tables.

> If there are no matching rows in either table, NULL values are returned for the columns from the other table.

*   **Cross Join**: Used to combine rows from two tables based on a related column between them. It returns all possible combinations of rows from both tables.

> If there are no matching rows in either table, NULL values are returned for the columns from the other table.

Practice Exercise
-----------------

Tip

These practice exercise are only to understand primary key and foreign key. To learn Joins, we will use a simple 2 table setup.

### Code setup in SQL

We will create 4 tables for a chai store so that we can practice joins. The tables will be:

*   customers
*   chai\_store
*   orders
*   order\_items

#### customers table

    CREATE TABLE customers (    customer_id SERIAL PRIMARY KEY,    customer_name VARCHAR(50),    contact_info VARCHAR(100));

Let’s add some sample data to the customers table:

    INSERT INTO customers (customer_name, contact_info)VALUES('Alice', 'alice@example.com'),('Bob', 'bob@example.com'),('Charlie', 'charlie@example.com'),('David', 'david@example.com'),('Eve', 'eve@example.com');

#### chai\_store table

    CREATE TABLE chai_store (    chai_id SERIAL PRIMARY KEY,    chai_name VARCHAR(50),    price DECIMAL(5, 2),    chai_type VARCHAR(50));

Let’s add some sample data to the chai\_store table:

    INSERT INTO chai_store (chai_name, price, chai_type)VALUES('Masala Chai', 30.00, 'Spiced'),('Green Chai', 25.00, 'Herbal'),('Black Chai', 20.00, 'Classic'),('Iced Chai', 35.00, 'Cold'),('Oolong Chai', 40.00, 'Specialty');

#### orders table

    CREATE TABLE orders (    order_id SERIAL PRIMARY KEY,    customer_id INT,    order_date DATE,    FOREIGN KEY (customer_id) REFERENCES customers(customer_id));

Let’s add some sample data to the orders table:

    INSERT INTO orders (customer_id, order_date)VALUES(1, '2024-09-19'),(2, '2024-09-18'),(1, '2024-09-20'),(4, '2024-09-17');

#### order\_items table

    CREATE TABLE order_items (    order_item_id SERIAL PRIMARY KEY,    order_id INT,    chai_id INT,    quantity INT,    price DECIMAL(5, 2),    FOREIGN KEY (order_id) REFERENCES orders(order_id),    FOREIGN KEY (chai_id) REFERENCES chai_store(chai_id));

Let’s add some sample data to the order\_items table:

    INSERT INTO order_items (order_id, chai_id, quantity, price)VALUES(1, 1, 2, 30.00),(1, 2, 1, 25.00),(2, 3, 2, 20.00),(3, 1, 1, 30.00),(4, 5, 3, 40.00);

This is our sample setup for the chai store database. This consists of four tables: customers, chai\_store, orders, and order\_items. Tables are storing data about customers, chai varieties, orders, and the items in each order. Tables are linked together using foreign keys.

> Primary keys are used to uniquely identify each row in a table. Foreign keys are used to establish relationships between tables. Foreign keys are used to link tables based on a related column between them.

Summary
-------

In this chapter, we have learned about the basics of SQL Joins. Also we have learned about Primary Key and Foreign Key. By the end of this chapter, you should have a good understanding of how to use SQL Joins and Keys to manage and manipulate relational databases effectively.

[Previous  
SQL practice exercise](/sql-practice-exercise/) [Next  
SQL Practice Exercise for joins](/sql-practice-exercise-for-joins/)