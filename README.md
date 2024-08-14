
# Online Book Review Application

## Overview

This project is a server-side application built using Node.js and Express. The application allows users to register, log in, and manage book reviews. It includes secure authentication using JWT (JSON Web Tokens) and performs CRUD operations on books with user-specific data stored in a MongoDB database.

## Features

- **User Authentication**: Register and log in using a username and password.
- **JWT Authentication**: Secure routes using JWT for session-level authentication.
- **CRUD Operations**: Users can create, read, update, and delete their book reviews.
- **Protected Routes**: Only authenticated users can access book review routes.
- **Data Storage**: Book reviews and user credentials are stored in MongoDB.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and book review data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for implementing JWT authentication.
- **Postman**: Tool for testing API endpoints.

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) installed on your machine.
- **MongoDB** installed and running on your machine or a cloud-based MongoDB service.

### Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YourUsername/book-review-app.git
   cd book-review-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory and add the following:
     ```
     JWT_SECRET=your_jwt_secret_key
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the Server**:
   - Start the server using Node.js:
     ```bash
     node server.js
     ```
   - Or, use `nodemon` for auto-reloading:
     ```bash
     npx nodemon server.js
     ```

5. **Test the API**:
   - Use Postman or a similar tool to test the API endpoints.

### API Endpoints

#### User Authentication

- **Register**: `POST /api/register`
  - Request body: `{ "username": "your_username", "password": "your_password" }`
  - Registers a new user.

- **Login**: `POST /api/login`
  - Request body: `{ "username": "your_username", "password": "your_password" }`
  - Logs in an existing user and returns a JWT token.

#### Book Reviews (Protected Routes)

- **Create Book Review**: `POST /api/books`
  - Request body: `{ "title": "Book Title", "author": "Book Author", "review": "Your Review" }`
  - Creates a new book review for the logged-in user.

- **Get All Book Reviews**: `GET /api/books`
  - Retrieves all book reviews for the logged-in user.

- **Update Book Review**: `PUT /api/books/:id`
  - Request body: `{ "title": "Updated Title", "author": "Updated Author", "review": "Updated Review" }`
  - Updates an existing book review for the logged-in user.

- **Delete Book Review**: `DELETE /api/books/:id`
  - Deletes a specific book review for the logged-in user.

### Testing

- **Postman**: You can test the API using Postman by sending requests to the server and verifying the responses.
- **Mocha/SuperTest** (Optional): You can write automated tests using Mocha and SuperTest to test the API endpoints.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Please ensure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
