import mongoose from 'mongoose'
const connectDB = (DATABASE_URL) => {
    return (mongoose.connect(`${DATABASE_URL}`)
        .then((res) => {
            console.log("connected to db");
        }).catch((err) => {
            console.log(err.message)
        })
    )
};
export default connectDB;

