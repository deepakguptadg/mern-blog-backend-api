import mongoose from "mongoose";

const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name : {type: String},
    phone : {type: Number},
    email : {type: String},
    message : {type: String},
    messageDate : {type: Date, default: Date.now},
})

const ContactModel = mongoose.model('contact', ContactSchema);
export default ContactModel