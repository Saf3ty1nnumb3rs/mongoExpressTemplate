const Schema = require('../db/schema')
const mongoose = require('mongoose')

const Other = mongoose.model('Other', Schema.OtherSchema)
module.exports = Other