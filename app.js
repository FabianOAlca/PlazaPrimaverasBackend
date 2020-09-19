var express = require ('express')
var path = require ('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan') 
var passport = require ('passport')
require("dotenv").config();
require("./passport");
const cors = require('cors'); 





const localesRouter = require('./routes/locales')


var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/locales',localesRouter);



module.exports = app;