const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//BODY PARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//MONGOOSE implementation
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/')








//ROUTE CONTROLLER
const routeController = require('./controllers/routeController.js')
app.use('/route' , routeController)



//DB CONNECTION 
//set db to mongoose.connection
const db = mongoose.connection
//if db can't connect to mongoose an error will flag
db.on('error', (err) =>{
    console.log(err)
})
//once db connects, a notification is logged
db.once('open', () => {
    console.log('Database has been connected')
})
//APP LISTENING set app listening on 4000 for postman application
app.listen(4000, () => {
    console.log('App listening on port 4000')
})