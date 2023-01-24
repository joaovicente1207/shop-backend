const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const dataSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        user_type: {type: Number, default: 1},
        password: String,
    },
    {
        timestamps:true
    
    });

dataSchema.pre('save', function(next){
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

dataSchema.pre('findOneAndUpdate', function(next){
    let password = this.getUpdate().password+'';
    this.getUpdate().password = bcrypt.hashSync(password,10);
    next();
});

const user = mongoose.model("User", dataSchema);
module.exports = user;