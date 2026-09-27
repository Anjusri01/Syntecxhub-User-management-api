# User Management REST API

A simple RESTful API built with Node.js, Express, MongoDB and Mongoose.

## Features

- Create user
- Get all users
- Get user by ID
- Update user
- Delete user
- MongoDB + Mongoose
- Basic Authentication
- Postman-ready endpoints

## 1. Requirements

Install these first:

- Node.js
- MongoDB Community Server (or use MongoDB Atlas)
- VS Code
- Postman

Check Node.js:

```bash
node -v
npm -v
```

## 2. Open the project

Open this folder in VS Code:

```text
user-management-api
```

Open the VS Code terminal and run:

```bash
npm install
```

## 3. Start MongoDB

If MongoDB is installed locally, make sure the MongoDB service is running.

The project uses:

```text
mongodb://127.0.0.1:27017/user_management
```

You can change this in `.env`.

## 4. Start the API

For normal mode:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

You should see:

```text
MongoDB connected successfully
Server running at http://localhost:5000
```

## 5. Basic Authentication

Default credentials in `.env`:

```text
Username: admin
Password: admin123
```

For Postman, use:

Authorization -> Basic Auth

Username:

```text
admin
```

Password:

```text
admin123
```

## 6. API Endpoints

### Create User

POST

```text
http://localhost:5000/api/users
```

Body -> raw -> JSON:

```json
{
  "name": "Anju",
  "email": "anju@example.com",
  "age": 22
}
```

### Get All Users

GET

```text
http://localhost:5000/api/users
```

### Get One User

GET

```text
http://localhost:5000/api/users/USER_ID
```

Replace `USER_ID` with the MongoDB `_id`.

### Update User

PUT

```text
http://localhost:5000/api/users/USER_ID
```

Body:

```json
{
  "name": "Anju Kethavath",
  "email": "anju@example.com",
  "age": 23
}
```

### Delete User

DELETE

```text
http://localhost:5000/api/users/USER_ID
```

## Project Structure

```text
user-management-api/
│
├── controllers/
│   └── userController.js
│
├── middleware/
│   └── basicAuth.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Status Codes

- 201 = User created
- 200 = Successful request
- 400 = Bad request
- 401 = Authentication required/invalid
- 404 = User not found
- 409 = Duplicate email
- 500 = Server error
