const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const http = require('http');

const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const jobSeekerRoutes = require('./routes/jobSeekerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const blogRoutes = require('./routes/blogRoutes');
const searchRoutes = require('./routes/searchRoutes');
const chartRoutes = require('./routes/chartRoutes');
const app = express();
app.use(cookieParser());
// CORS configuration to allow your frontend
const corsOptions = {
  origin: 'https://jobify-mwbz.onrender.com', // Replace with your actual frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust allowed methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Adjust allowed headers
};

// Apply CORS middleware with the specified options
app.use(cors(corsOptions));
const server = http.createServer(app);



// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/jobSeeker', jobSeekerRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/charts', chartRoutes);
// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));



// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
