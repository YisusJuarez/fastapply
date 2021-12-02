const {Schema, model} = require('mongoose');

const applicantSchema = new Schema({
    name:String,
    email:String,
    cvUrl:String
    
})