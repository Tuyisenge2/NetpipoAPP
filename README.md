# Project Overview

Welcome to the Employee Management API! This repository contains the source code for a backend system designed to manage employees, authentication. It demonstrates the use of various backend technologies, including Node.js, Express, JWT authentication, and PostgreSQL. This document provides setup instructions, API documentation, and testing guidelines.
---

## API Documentation

This application is fully documented using **Swagger**. You can explore all available API endpoints, request parameters, and responses at:

🔗 **Swagger Documentation:** [https://netpipobackend-8cg4.onrender.com/api/v1/docs/#/](https://netpipobackend-8cg4.onrender.com/api/v1/docs/#/)

## Introduction

This Node.js backend application provides an API for managing employees. It includes user authentication and CRUD operations for employees. The API is designed to be secure, scalable, and easy to integrate into other systems.

## Features

- **User Authentication**: Secure authentication using JWT.
- **Employee Management**: Create, read, update, and delete employee records.
- **RESTful API**: Well-structured endpoints following REST principles.
- **PostgreSQL Database**: Data persistence using PostgreSQL.
- **Secure API Routes**: Some routes require authentication via JWT.

## Tech Stack

- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for building REST APIs.
- **PostgreSQL**: Relational database for data storage.
- **Sequelize ORM**: Object-Relational Mapping for PostgreSQL.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.
- **bcrypt.js**: For hashing user passwords.
- **dotenv**: For managing environment variables.

## Getting Started

To set up and run this project, follow the steps below:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js]
- [npm]
- [PostgreSQL]

### Installation

1. Clone the repository:
   ```bash
   git clone 
   ```
2. Change to the project directory:
   ```bash
   cd NETPIPOBACKEND
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     PORT=5000
     DATABASE_URL=postgres://username:password@localhost:5432/employeedb
     JWT_SECRET=your_secret_key
     ```

### Running Locally

Start the development server:
```bash
npm run dev
```
The API should now be running at `http://localhost:5000/api/v1/`



## API Documentation

### Authentication

#### Register a User
- **Endpoint:** `POST /api/v1/auth`
- **Description:** generate token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "position": "Admin"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### Employee Routes

#### Get All Employees
- **Endpoint:** `GET /api/v1/employees`

#### Create an Employee
- **Endpoint:** `POST /api/v1/employees`
- **Authorization:** Requires a valid JWT token.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "position": "Engineer",
    "salary":"34343"
  }
  ```

#### Update an Employee
- **Endpoint:** `PUT /api/v1/employees/:id`
- **Authorization:** Requires a valid JWT token.

#### Delete an Employee
- **Endpoint:** `DELETE /api/v1/employees/:id`
- **Authorization:** Requires a valid JWT token.

### 2. **Test on Render**

The application is deployed on Render and can be tested at:
```bash
https://netpipobackend-8cg4.onrender.com/api/v1/docs
```

### 3. **Authentication & JWT Token**

Some routes require authentication using JWT tokens. To generate a token:

1. Send a `POST` request to `/api/v1/auth/` with a valid email and position.
2. Copy the token from the response.
3. Use the token in the Authorization header:
   ```json
   {
     "Authorization": "Bearer your_jwt_token"
   }
   ```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding! 🚀

