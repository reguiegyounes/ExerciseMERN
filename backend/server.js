//Server generated
var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

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

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(Port, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' +  ':' + Port);
    }
});