import mongoose from "mongoose";

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title : {type: String},
    desc : {type: String},
    sort_desc : {type: String},
    img : {type: String},
    uploadDate : {type: Date, default: Date.now},
    uploadBy : {type: String},
    isActive : {type: Number, default: 1}
})

const BlogModel = mongoose.model('blog', BlogSchema);
export default BlogModel