## Job Application Backend

### Description
This backend provides a job posting and application system. It allows employers to post job listings, job seekers to apply for jobs, and both employers and seekers to manage their profiles and interactions. The API is built using Node.js with Express and MongoDB.

### Features
- Employer can post, update, and delete jobs.
- Job seeker can view available jobs, apply for them, and manage their applications.
- Users can register and authenticate using JWT.
- The backend handles job applications, user profiles, and notifications.
- Secure file upload for company logos and resumes.


The server will start at `http://localhost:4000`.

## API Routes

### Jobs Routes
-- **POST `/api/jobs/postJob`**: Create a new job post.  
-- **GET `/api/jobs/:id/views`**: Get the number of views for a job post.  
-- **POST `/api/jobs/:id/save`**: Save a job for a user.  
-- **POST `/api/jobs/:id/apply`**: Apply for a job.  
-- **GET `/api/jobs/:id/applicants`**: Get all applicants for a job.  
-- **GET `/api/jobs/count`**: Get the total count of job posts.  
-- **GET `/api/jobs/:id/related`**: Get related jobs for a given job post.  
-- **DELETE `/api/jobs/saved/:id`**: Delete a saved job.  
-- **GET `/api/jobs/all`**: Get all jobs.  
-- **GET `/api/jobs/filter`**: Get filtered jobs.  
-- **GET `/api/jobs/:id`**: Get a job by ID.  
-- **PUT `/api/jobs/:id`**: Update a job by ID.  
-- **POST `/api/jobs/:id/logo`**: Upload a logo for a job post.  
-- **DELETE `/api/jobs/:id`**: Delete a job by ID.  

### Blog Routes
-- **GET `/api/blogs/`**: Get all blogs.  
-- **POST `/api/blogs/`**: Create a new blog post.  
-- **POST `/api/blogs/:id/upload-image`**: Upload an image to a blog post.  
-- **GET `/api/blogs/count`**: Get the total count of blogs.  
-- **GET `/api/blogs/:id`**: Get a blog by ID.  
-- **PUT `/api/blogs/:id`**: Update a blog by ID.  
-- **DELETE `/api/blogs/:id`**: Delete a blog by ID.  

### Event Routes
-- **GET `/api/events/`**: Get all events.  
-- **POST `/api/events/`**: Create a new event.  
-- **POST `/api/events/:id/logo`**: Update the logo for an event.  
-- **PUT `/api/events/:id`**: Update an event by ID.  
-- **POST `/api/events/mark-interested`**: Mark an event as interested.  
-- **GET `/api/events/filter`**: Filter events.  
-- **DELETE `/api/events/:id`**: Delete an event by ID.  
-- **GET `/api/events/count`**: Get the total count of events.  

### Job Seeker Routes
-- **POST `/api/jobseeker/`**: Create a new job seeker post.  
-- **GET `/api/jobseeker/`**: Get all job seeker posts.  
-- **GET `/api/jobseeker/filter`**: Filter job seeker posts.  
-- **POST `/api/jobseeker/hire`**: Mark a user as hired.  
-- **GET `/api/jobseeker/hiring-details`**: Get the hiring details.  
-- **PUT `/api/jobseeker/:postId`**: Update a job seeker post.  
-- **DELETE `/api/jobseeker/:postId`**: Delete a job seeker post.  
-- **GET `/api/jobseeker/count`**: Get the total count of job seeker posts.  

### Notification Routes
-- **GET `/api/notifications/`**: Get all notifications for the authenticated user.  
-- **PUT `/api/notifications/mark-read`**: Mark notifications as read.  

## Authentication

All routes except for `GET` routes require authentication.  
- **Login**: Implement login functionality to generate an authentication token.  
- **Authentication Middleware**: The `authenticateUser` middleware is used to protect routes that require a logged-in user. It checks for the existence of a valid JWT in the request headers.

## Cloudinary Integration

This project uses [Cloudinary](https://cloudinary.com/) for image uploads.

### Cloudinary Configuration

In your `.env` file, set up the following:


### Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose for ORM)
- **JWT** (JSON Web Token) for user authentication
- **Multer** and **Cloudinary** for file upload
- **Bcrypt** for password hashing
- **dotenv** for environment variables

### Setup

#### Prerequisites
Ensure you have the following installed:
- Node.js (version 14 or later)
- MongoDB (or use MongoDB Atlas for cloud-based DB)
- Postman or any API client for testing

#### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-application-backend.git
