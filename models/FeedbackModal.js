import mongoose from "mongoose";

const Schema = mongoose.Schema

const FeedbackSchema = new Schema({
    userId : {type: String},
    feedback : {type: String},
    blogId : {type: String},
    starCount : {type: String},
    isActive : {type: Number, default: 1},
    feedbackDate : {type: Date, default: Date.now},
})

const FeedbackModal = mongoose.model('feedback', FeedbackSchema);
export default FeedbackModal