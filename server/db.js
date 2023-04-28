
    
    // module.exports = connection;
    const mongoose = require('mongoose');
    require('dotenv').config();

    const DB = process.env.DB_URL;
    console.log(DB);


 const mongoConnected= mongoose.connect(DB,{
     useUnifiedTopology: true,
     useNewUrlParser: true
     }).then(
    () => console.log('DB connected...')
).catch(err => console.log(err))

module.exports = mongoConnected;