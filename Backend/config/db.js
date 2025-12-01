const mongoose = require('mongoose');
const colors = require('colors');

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`database is connected on :${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log('somting rong:',error )
        process.exit(1);
    }
}

// const connectdb2= mongoose.connect(process.env.MONGO_URI)
//     .then(()=>console.log('connect to mongodb ^_^'))
//     .catch((error)=>console.log(`connect to db faild ${error}`))

module.exports={
    connectDB,
}
