const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoExpressTemplate')//update host folder to reflect YOUR working folder

const Generic = require('../models/generic')
const Other = require('../models/other')