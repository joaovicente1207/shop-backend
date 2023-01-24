const User = require("../models/user.model.js");

module.exports = {
    async getUsers(req, res){
        const users = await User.find();
        res.json(users)
    },
    async getUserByID(req, res){
        const {_id} = req.params;
        const user = await User.findOne({_id});
        res.json(user)
    },
    async deleteUserByID(req, res){
        const {_id} = req.params;
        const user = await User.findByIdAndDelete({_id});
        res.json(user)
    },
    async createUser(req, res){
        const {username, email, user_type, password} = req.body;
        let data = {};

        let newUser = await User.findOne({email})
        if(!newUser){
            data = {username, email, user_type, password};
            newUser = await User.create(data);
            return res.status(200).json(newUser);
        }
        else{
            return res.status(500).json(newUser);
        }
    },
    async updateUser(req, res) {
        const {_id, username, email, user_type, password} = req.body;
        const data = {username, email, user_type, password};
        const user = await User.findOneAndUpdate({_id}, data, {new:true})

        return res.json(user)
    }
}