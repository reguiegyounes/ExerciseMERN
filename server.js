//Server generated
var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const path=require('path');

require('dotenv').config();

var app = express();
var Port = process.env.PORT || 9000;


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

const exercisesRouter = require('./backend/routes/exercises');
const usersRouter = require('./backend/routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

if(process.env.PROD){
    app.use(express.static(path.join(__dirname,'/client/build')) )
}



app.listen(Port, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' +  ':' + Port);
    }
});