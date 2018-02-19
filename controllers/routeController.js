const express = require('express')
const router = express.Router()

const Generic = require('../models/generic')//from generic.js
const Other = require('../models/other')//from other.js



//INDEX ROUTE

router.get('/', (req, res) =>{
    res.send('Hello')///for testing purposes
//Use mongo to find all 'Generic' in our database - from ../models/generic.js aka User
    Generic.find()
        .then((generics) => {
            //Once 'generics' have been found, then send JSON object to Client
            res.send(generics)
        })


})



























module.exports =router