import ContactModel from "../models/ContactModel.js"

const saveContact = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email,phone, message } = req.body
        const docs = new ContactModel({
            'name': name,
            'email': email,
            'phone': phone,
            'message': message,
        })
        const result = await docs.save()
        res.send({ "Status": 'Success', "Message": 'Message Send Succesfully', "data": result })
    } catch (error) {
        console.log(error)
    }
}

export { saveContact }