import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    displayName : {type: String, required: [true, 'name is required']},
    email : {type: String, required: [true, 'email is required'], unique: true} ,
    password : {type: String, required: [true, 'password is required']},
    createdDate : {type: Date, default: Date.now},
})

const UserModal = mongoose.model('user', UserSchema);
export default UserModal