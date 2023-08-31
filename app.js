if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const connectWithDB = require('./config/db');
//import routes
const userAuthroutes=require('./routes/web/authorizationRoutes')



const app = express()
// Set port
const port = process.env.PORT || '7000'

// Configure folders containing static files
app.use(express.static('public'));
app.use('/images', express.static(__dirname + 'public/images'));

//web routes
app.use("/" , userAuthroutes); 

// Configure Template Engine
// app.use(expressLayouts)
// app.set('layout', './layouts/default')
app.set('view engine', 'ejs')

// Configure bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

connectWithDB();

app.listen(() => {
	console.info(`[STATUS] App listening on port ${port}`)
})