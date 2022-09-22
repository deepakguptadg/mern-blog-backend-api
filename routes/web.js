
import express from 'express'
const router = express.Router()
import { addBlog, deleteBlog, getAllBlog, getSingleBlog, updateBlog, getActiveBlog } from '../controllers/BlogControllers.js'
import upload from '../middlewares/uploadMiddleware.js'
router.use('/', upload.fields([{ name: 'img', maxCount: 1 }]))
router.get('/', getAllBlog)
router.get("/get-blog", getActiveBlog)
router.get('/:id', getSingleBlog)
router.post('/', addBlog)
router.put('/', updateBlog)
router.delete('/', deleteBlog)

export default router
