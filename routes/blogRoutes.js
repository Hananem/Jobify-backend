// routes/blogRoutes.js
const express = require('express');
const blogController = require('../controllers/blogController');
const upload = require('../config/multerConfig');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(blogController.getAllBlogs)
router.post('/', authenticateUser,authorizeAdmin, upload.single('image'), blogController.createBlog);
router.post('/:id/upload-image', authenticateUser, authorizeAdmin, upload.single('image'),  blogController.uploadBlogImage);
// Route for counting blogs
router.get('/count', blogController.getBlogCount);
router.route('/:id')
  .get(blogController.getBlogById)
  .put(authenticateUser,authorizeAdmin, blogController.updateBlogById)
  .delete(authenticateUser, authorizeAdmin, blogController.deleteBlogById);
// Route to upload blog image
module.exports = router;
