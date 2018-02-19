const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise




///THE FOLLOWING ARE JUST EXAMPLE SCHEMAS
const OtherSchema = new Schema ({
    name: String
    
})

const GenericSchema = new Schema ({
    first_name: String,
    email: {type: String, required: true, unique: true},
    created_at: Date,
    updated_at: Date,
    others: [OtherSchema]
})

GenericSchema.pre('save' , (next) => {
    const now = new Date()
    this.updated_at = now
    if(!this.created_at){
        this.created_at = now
    }
    next()
})


//THESE ARE THE EXPORTS OF THE EXAMPLE SCHEMAS;THESE WOULD OF COURSE CHANGE WITH YOUR OWN SCHEMA
module.exports ={

GenericSchema,
OtherSchema
}