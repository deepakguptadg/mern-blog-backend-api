import UserModal from "../models/UserModal.js"

// User Login and Registration
const userRegister = async (req, res) => {
    const {displayName, email, password} = req.body

    if(!displayName || !email || !password){
        res.send({ "Status": 'Failed', "Message": 'Please Provide All Fields' })
    }

    const userExist = await UserModal.findOne({email})

    if(userExist){
        res.send({ "Status": 'Failed', "Message": 'User Already Exists' })
    }

    const user = new UserModal({
        displayName : displayName,
        email : email,
        password : password
    })
    const result = await user.save()
    res.send({ "Status": 'Success', "Message": 'User Registration Succesfully', "data": result })


}

const userLogin = async(req, res) => {
    const {email, password} = req.body
    const user = await UserModal.findOne({email})

    if(user && user.password === password){
        const data = {
            _id : user.id,
            displayName: user.displayName,
            email: user.email
        }
        res.send({ "Status": 'Success', "Message": 'User Login Succesfully', "data": data })
    }else{
        res.send({ "Status": 'Failed', "Message": 'Invalid Login Details'})
    }
   
}

// Admin Login
const adminLogin = (req, res) => {
    console.log('admin Login')
    res.send('admin Login')
}

export {userRegister, userLogin, adminLogin}