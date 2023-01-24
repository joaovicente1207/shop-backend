const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        amount: {type:Number, default:0},
    },
    {
        timestamps:true
    
    });


const product = mongoose.model("Product", dataSchema);
module.exports = product;