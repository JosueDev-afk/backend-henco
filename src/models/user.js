const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
    "Henco Ref":{
        type: String,
        required: true
    },
    "ETA":{
        type: Date,
        required: true
    },
    "F_Date":{
        type: Date,
        required: true
    },
    "Customer":{
        type: String,
        required: true
    },
    "CustomerGroup":{
        type: String,
        required: true
    },
    "Supervisor":{
        type: String,
        required: true
    },
    "HencoExecutive":{
        type: String,
        required: true
    },
    "QuotedBy":{
        type: String,
        required: true
    },
    "HencoCustom":{
        type: String,
        required: true
    },
    "TypeOfService":{
        type: String,
        required: true
    },
    "OperationType":{
        type: String,
        required: true
    },
    "OriginCountry":{
        type: String,
        required: true
    },
    "DestinationCountry":{
        type: String,
        required: true
    },
    "Trade":{
        type: String,
        required: true
    },
    "Teus":{
        type: Number,
        required: true
    },
    "CustomsOperation":{
        type: Number,
        required: true
    },
    "FreeHand":{
        type: Number,
        required: true
    },
    "Service":{
        type: String,
        required: true
    },
    "SO":{
        type: Number,
        required: true
    },
    "SODate":{
        type: Date,
        required: true
    },
    "ArrivalDate":{
        type: Date,
        required: true
    },
    "EIRDate":{
        type: Date,
        required: true
    },
    "Industry":{
        type: String,
        required: true
    },
    "CarrierName":{
        type: String,
        required: true
    },
    "Agent":{
        type: String,
        required: true
    },
})

module.exports=mongoose.model('User',userSchema)