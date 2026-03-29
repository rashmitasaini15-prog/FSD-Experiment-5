# Student Details
Name: Rashmita Saini
UID: 24BCC70013
Course: B.E. CSE (Cloud Computing)
Subject: Full Stack Development
University: Chandigarh University


# Experiment 5.1: Product CRUD API using Mongoose

## Aim
To perform CRUD (Create, Read, Update, Delete) operations on a product database using Mongoose.

## Objectives
Define a Mongoose schema and model
Implement Create, Read, Update, Delete operations
Apply validation on product fields
Build REST API using Express.js
Test API endpoints using Postman

## Technologies Used
* HTML5 (for basic testing UI if used)
* JavaScript (ES6)
* Node.js
* Express.js
* MongoDB
* Mongoose

## Description
This experiment demonstrates how to build a backend application using Node.js and Express.js, connected to a MongoDB database using Mongoose.
A Product schema is created with fields like name, price, category, and stock status. RESTful API endpoints are implemented to perform CRUD operations. The application allows users to add, retrieve, update, and delete product data dynamically.

## Features
Create new product
Fetch all products
Update product details
Delete product
Schema validation using Mongoose
JSON-based API responses

## Key Concepts
Mongoose Schema & Model
REST API (GET, POST, PUT, DELETE)
Express Routing
MongoDB Integration
JSON Data Handling

## Learning Outcomes
After completing this experiment, I learned:
* How to connect Node.js with MongoDB
* How to use Mongoose for database operations
* How to build RESTful APIs
* How to test APIs using Postman
* How CRUD operations work in backend


# Experiment 5.2: Student Management System (MVC)
## Aim
To build a Student Management System using MVC architecture with Node.js, Express, MongoDB, and EJS.

## Objective
* Create a proper MVC folder structure
* Implement CRUD operations (Add, Edit, Delete, View)
* Use Express for routing
* Connect MongoDB database using Mongoose
* Build dynamic UI using EJS templates

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6)
* Node.js
* Express.js
* MongoDB (Mongoose)
* EJS Template Engine

## Description
This experiment demonstrates how to build a full-stack web application using the MVC (Model-View-Controller) architecture. The system allows users to manage student records by adding, editing, viewing, and deleting student details.
The MVC pattern helps in separating the application logic, user interface, and database operations, making the code more organized and maintainable.

## Features
Add new student
Edit student details
Delete student
Display all students
Dynamic rendering using EJS
Clean and simple user interface

## Key Concepts
* MVC Architecture (Model, View, Controller)
* RESTful Routing
* Middleware usage
* Database operations using Mongoose
* Template rendering with EJS

## Modules Used
* Model
Defines student schema (name, roll number) and handles database interaction.
* View
EJS templates used to display student data dynamically.
* Controller
Handles logic for adding, updating, deleting, and fetching students.
* Routes
Manages application endpoints and connects them with controllers.

## Learning Outcomes
* After completing this experiment, I learned:
* How to perform CRUD operations using MongoDB
* How to connect backend with frontend using EJS
* How to organize code into models, views, and controllers
* How to build a simple full-stack web application



# Experiment 5.3: Product Catalog with Nested Schema

## Aim
To create a product catalog using nested schema and perform aggregation and stock management.

## Objective
* Create nested schemas
* Add variants and reviews
* Perform aggregation queries
* Implement stock update functionality

## Technologies Used
* MongoDB
* Mongoose
* Node.js
* JavaScript (ES6)
* MongoDB Compass

## Description
This experiment demonstrates how to design a product catalog using nested schemas in MongoDB. Each product contains multiple variants and reviews. Aggregation queries are used to calculate category-wise ratings, and stock management is implemented using update operations.

## Features
* Nested schema (Product → Variants → Reviews)
* Aggregation for category rating
* Low stock detection
* Stock update functionality

## Key Concepts
* Nested Schema
* Aggregation ($group, $avg)
* Array Handling ($unwind)
* Filtering ($match)
* Update ($set)

## Learning Outcomes
* After completing this experiment, I learned:
* How to create nested schemas in MongoDB
* How to perform aggregation queries
* How to manage stock dynamically
* How to handle embedded documents


