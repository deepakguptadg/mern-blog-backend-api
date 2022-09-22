import BlogModel from "../models/BlogModel.js"

const getAllBlog = async (req, res) => {
    try {
        const result = await BlogModel.find()
        res.send({ "Status": 'Success', "data": result })
    } catch (error) {
        console.log(error)
    }
}

const getActiveBlog = async (req, res) => {
    try {
        const result = await BlogModel.find({isActive: 1})
        res.send({ "Status": 'Success', "data": result })
    } catch (error) {
        console.log(error)
    }
}

const getSingleBlog = async (req, res) => {
    try {
        const id = req.params.id
        const result = await BlogModel.findById(id)
        res.send({ "Status": 'Success', "data": result })
    } catch (error) {
        console.log(error)
    }
}
const addBlog = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.files['img'])
        const { title, desc,sort_desc, uploadBy } = req.body
        const img = req.files['img'][0].filename
        const docs = new BlogModel({
            'title': title,
            'desc': desc,
            'sort_desc': sort_desc,
            'img': img,
            'uploadBy': uploadBy,
        })
        const result = await docs.save()
        res.send({ "Status": 'Success', "Message": 'Blog Inserted Succesfully', "data": result })
    } catch (error) {
        console.log(error)
    }
}
const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        const result = new BlogModel.findByIdAndDelete(id)
        const data = BlogModel.find()
        res.send({"Message": "Blog Deleted Successfully !!", "Status": "Success", "data": result, "data": data})
    } catch (error) {
        console.log(error)
    }
}

const updateBlog = async (req, res) => {
    try {
        const result = await BlogModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({"message": "Blog Update Succesfully !!", "Status": "Success", "data": result})
    } catch (error) {
        console.log(error)
    }
}

export { getAllBlog, getSingleBlog, addBlog, deleteBlog, updateBlog, getActiveBlog }