const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const AccountDataSchema = Schema({
    username: { // This passes in configuration objects and put in validation rules
    type: String,
    required: true,
    unique: true // This make mongoose to check that the record should be unique before saving to the database and can do the exact same thing to username. 
    },
    password: {
    type: String,
    required:true
    },
    accounttype: {
    type: String,
    required: true
    },
});

AccountDataSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error,hash)=>{
    user.password = hash
    next()    
    });
});

// This is the export model

const AccountData = mongoose.model('AccountData',AccountDataSchema);
module.exports = AccountData