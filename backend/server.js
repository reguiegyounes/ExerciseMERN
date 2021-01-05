//Server generated
var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

var app = express();
var Port = process.env.PORT || 5000;
var IP = process.env.IP || '127.0.0.1';


app.use(cors());
app.use(express.json());
 
const uri =process.env.ATLAS_URI;
mongoose.connect(uri,
    {useNewUrlParser:true
    ,useCreateIndex:true
    , useUnifiedTopology:true
    }
)
const connection =mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfuly")
})



app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + Port);
    }
});