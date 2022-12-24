const mongoose = require('mongoose');

const connectionDB = async() =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});
        console.log('MonggoDB connected!');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectionDB;