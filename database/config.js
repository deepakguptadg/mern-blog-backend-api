import mongoose from 'mongoose'

const config = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS ={
            dbName : 'mern-mui-blog'
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Database Connected Successfully !!")
    } catch (error) {
        console.log(error)
    }
}

export default config