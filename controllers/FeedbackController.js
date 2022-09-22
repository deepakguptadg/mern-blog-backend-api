import FeedbackModal from "../models/FeedbackModal.js"

const saveFeedback = async (req, res) => {
    try {
        console.log(req.body)
        const { blogId, feedback,starCount, userId } = req.body
        const docs = new FeedbackModal({
            'blogId': blogId,
            'feedback': feedback,
            'starCount': starCount,
            'userId': userId,
        })
        const result = await docs.save()
        res.send({ "Status": 'Success', "Message": 'Feedback Send Succesfully', "data": result })
    } catch (error) {
        console.log(error)
    }
}

const getFeedback = async (req, res) => {
    try {
        console.log('feedvack Get call')
        console.log(req.body.id)
        const result = await FeedbackModal.find({blogId: req.body.id})
        res.send({ "Status": 'Success', "data": result })
    } catch (error) {
        console.log(error)
    }
}

export { saveFeedback, getFeedback}