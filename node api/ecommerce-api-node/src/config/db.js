const mongoose = require("mongoose")

const mondbUrl="mongodb+srv://perfume:perfume321@cluster0.obnbyuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}