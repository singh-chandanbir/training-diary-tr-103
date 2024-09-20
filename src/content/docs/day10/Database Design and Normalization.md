---
title: Database Design and Normalization
description: A guide in my new Starlight docs site.
---



Understanding Database Design Principles
----------------------------------------

Good database design avoids **data redundancy** and ensures data **integrity**.

> **Example**: Instead of storing the city name in every row for each chai type, store city details in a separate `Cities` table and link it with the `Chai` table using foreign keys.

* * *

What is Normalization?
----------------------

Normalization organizes a database into tables and columns to:

*   Eliminate data redundancy.
*   Ensure data dependencies are logical.

* * *

### First Normal Form (1NF)

1NF ensures that the data in a table is organized into rows and columns, with each column holding atomic (indivisible) values.

> **Example**: A `Chai` table should have columns like `name`, `ingredients`, `price`, and each cell should contain a single value. You shouldn’t have multiple cities listed in one cell.

* * *

### Second Normal Form (2NF)

2NF ensures that each table depends on the primary key. There should be no partial dependencies (where a non-key column depends on part of a composite key).

> **Example**: If a table has a composite key (`chai_id`, `city_id`), ensure all non-key columns (like `price`) depend on the entire key, not just one part.

* * *

### Third Normal Form (3NF)

3NF ensures that non-primary-key columns do not depend on other non-primary-key columns.

> **Example**: A `Chai` table shouldn’t have both `city_name` and `city_population`. Instead, `city_name` and `city_population` should belong in a separate `City` table, and you can link it to the `Chai` table with a `city_id`.

* * *

Entity Relationship Diagrams (ERDs)
-----------------------------------

ERDs are used to visually represent relationships between database entities.

> **Example**: You might have two tables: `Chai` and `City`. An ERD would show a one-to-many relationship between cities and chai varieties.

*   **One-to-Many Relationship**: One city can have many chai varieties, but each chai variety is sold in one city.

* * *

Relationship in SQL
-------------------

There are different types of relationships in SQL:

*   One-to-One Relationship: One entity can have only one instance of another entity.
*   One-to-Many Relationship: One entity can have multiple instances of another entity.
*   Many-to-Many Relationship: One entity can have multiple instances of another entity, and vice versa.

LMS practice Exercise
---------------------

We will create a fun practice database design for Learning Management System (LMS) using SQL. The LMS will have the following entities:

*   Users
*   Courses
*   Videos
*   Enrollments

    users [icon:user] {_id string pkname stringemail string uniquepassword stringuserType enum "student", "instructor", "admin"isPaid booleanenrolledCourses ObjectId[] coursescreatedAt DateupdatedAt Date
    }
    courses [icon:book] {_id string pktitle stringdescription stringprice numberinstructorId ObjectId userscategory stringtags string[]durationInHours numbervideos ObjectId[] videoscreatedAt DateupdatedAt Date
    }
    videos [icon:video] {_id string pkcourseId ObjectId coursestitle stringdescription stringurl stringdurationInMinutes numbercreatedAt DateupdatedAt Date
    }
    enrollments [icon:user] {_id string pkuserId ObjectId userscourseId ObjectId coursesenrollmentDate Dateprogress numbercompletedAt DatecreatedAt DateupdatedAt Date
    }
    users._id < enrollments.userIdenrollments.userId > users._idcourses._id < enrollments.courseIdenrollments.courseId > courses._idcourses._id < videos.courseIdvideos.courseId > courses._idusers._id < courses.instructorIdcourses.instructorId > users._id

Summary
-------

In this chapter, we have learned about database design and normalization. We have also learned about the basic data types and how to use them. We have also learned about the different types of relationships and how to use them. By the end of this chapter, you should have a good understanding of how to use database design and normalization in SQL.

