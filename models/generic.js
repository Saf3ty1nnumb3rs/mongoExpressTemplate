const Schema = require('../db/schema')
const mongoose = require('mongoose')

const Generic = mongoose.model('Generic' , Schema.GenericSchema)
module.exports = Generic