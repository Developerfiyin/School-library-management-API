Library Management System

A backend API for managing library operations: authors, books, students, library attendants, borrowing, and returning books.

Table of Contents
Overview
Features
Tech Stack
Project Structure
Installation
Environment Variables
Running the App
Quick Usage
API Reference
Authentication
Authors
Books
Students
Library Attendants
Data Models
Notes
Postman Documentation

1. Overview
This project is a Node.js + Express backend for a library management system. It connects to MongoDB via Mongoose and supports:

User signup and login
Role-based access control
Author creation and management
Book catalog management
Student registration
Library attendant registration
Book borrowing and returning workflows

2. Features
JWT authentication
Role-based authorization
Validation middleware for request payloads
MongoDB schema models for books, authors, students, attendants, and users
Borrow / return workflow with book status tracking
Admin / attendant / student access control

3. Tech Stack
Node.js
Express
MongoDB
Mongoose
JSON Web Tokens
bcrypt
dotenv
validator
