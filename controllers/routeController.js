const express = require('express')
const router = express.Router()

const Generic = require('../models/generic')//from generic.js
const Other = require('../models/other')//from other.js



//INDEX ROUTE------------------------------------------------------------------------

router.get('/', (req, res) =>{
    //res.send('Hello')///for testing purposes - remove when seeded
//Use mongo to find all 'Generic' in our database - from ../models/generic.js aka User
    Generic.find()
        .then((generics) => {
            //Once 'generics' have been found, then send JSON object to Client
            res.send(generics)
        })
})
//SHOW ROUTE------------------------------------------------------------------------
router.get('/:id', (req, res) => {
    res.send('Sup')///for testing purposes -remove when seeded
    //Find the _id of the user we want to return (in our router params)
    const genericId = req.params.id
    //Use the _id to search for a specific User in our DB
    Generic.findById(genericId)
    .then((generic)=> {
        res.send(generic)
    })
    //Once that user is found, send the object with user data to our

})

//CREATE ROUTE----------------------------------------------------------------------
router.post('/', (req, res) => {
    res.send(req.body)///for testing purposes
    //Get info about the new user from the request
    //req.body will give us info from user
    const newGenericInfo = req.body

    const generic = new Generic(newGenericInfo)
    //After user is saved redirect to the :id of new user
    generic.save().then((savedGeneric) => {
        res.send(savedGeneric)
    }).catch((err) => {
        res.send(err)
    })
})

//USER UPDATE ROUTE------------------------------------------------------------------
router.patch('/:id', (req,res) => {
    //Use data from req.body to update user at req.params.id
    Generic.findByIdAndUpdate(req.params.id,{
        first_name: req.body.first_name,
        email: req.body.email
    }, {new: true}).then((generic) => {
        //Once we have updated, send the updated user
        res.send(generic)
    }).catch((err) => {
        res.send(err)
    })
    })




























module.exports =router