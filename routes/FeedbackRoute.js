import express from 'express'
import { saveFeedback, getFeedback } from '../controllers/FeedbackController.js'
const router = express.Router()
router.post('/', saveFeedback)
router.post('/get-feedback', getFeedback)

export default router
