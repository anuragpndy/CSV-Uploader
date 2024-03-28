const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/csv-reader',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
const db= mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to MongoDb'));

db.once('open',function(){
    console.log("Connected to MongoDB");
});

module.exports= db;