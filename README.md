# 🚀 Task Manager API – Scalable Backend with JWT & Role-Based Access

A production-ready REST API built with Node.js, Express, and MongoDB featuring secure authentication, role-based access control, structured architecture, and Swagger documentation. Includes a basic React frontend for API interaction.

---

## 📌 Project Overview

This project demonstrates:

- Secure user authentication using JWT
- Role-based authorization (Admin / User)
- CRUD operations on Tasks
- API versioning
- Input validation & structured error handling
- Swagger API documentation
- Scalable project architecture
- Basic React frontend integration

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Swagger (swagger-jsdoc, swagger-ui-express)

### Frontend
- React.js
- Tailwind CSS
- Axios

---


---

## 🔐 Authentication Flow

1. User registers → password hashed using bcrypt  
2. User logs in → JWT token generated  
3. Token stored in frontend  
4. Protected routes require `Authorization: Bearer <token>`  
5. Role middleware verifies admin-only access  

---

## 📖 API Documentation

Swagger UI available at: http://localhost:5000/api-docs

Includes:
- Auth routes
- Task CRUD routes
- JWT authorization support

---


---

## 🧠 Scalability Considerations

This architecture supports scalability through:

- Modular folder structure (controllers, services, middleware)
- Stateless JWT authentication (horizontal scaling friendly)
- Centralized error handling
- Versioned API routes (`/api/v1`)
- Easily extractable modules for microservices
- Environment-based configuration

Future Enhancements:
- Redis caching for frequently accessed tasks
- Docker containerization
- Centralized logging (Winston / Morgan)
- Load balancing via Nginx
- CI/CD pipeline

---

## 🛡 Security Practices Implemented

- Password hashing (bcrypt)
- JWT token validation
- Role-based middleware protection
- Input validation
- Structured error responses
- Environment variable configuration

---

## 📊 Sample API Endpoints

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/v1/auth/register | Public |
| POST | /api/v1/auth/login | Public |
| GET | /api/v1/tasks | Authenticated |
| POST | /api/v1/tasks | Authenticated |
| DELETE | /api/v1/tasks/:id | Admin |

---

## 🧪 Logs

Application logs available in:

Includes:
- Server startup logs
- API request logs
- Error logs


## Setup Instructions

### Backend

```
cd backend
npm install
nodemon app.js
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

## Author

AKASH YADAV




