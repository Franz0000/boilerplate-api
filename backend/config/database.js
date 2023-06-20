const mongoose = require('mongoose');

const connectDataBase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con =>{
        console.log(`mongoDB database connected to host ${con.connection.host}`)
    })
}

module.exports = connectDataBase