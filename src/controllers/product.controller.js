const Product = require("../models/product.model");

module.exports = {
    async getProducts(req, res){
        const products = await Product.find();
        res.json(products)
    },
    async getProductByID(req, res){
        const {_id} = req.params;
        const product = await Product.findOne({_id});
        res.json(product)
    },
    async deleteProductByID(req, res){
        const {_id} = req.params;
        const product = await Product.findByIdAndDelete({_id});
        res.json(product)
    },
    async createProduct(req, res){
        const {name, description, price, amount} = req.body;
        let data = {};

        let newProduct = await Product.findOne({name})
        if(!newProduct){
            data = {name, description, price, amount};
            newProduct = await Product.create(data);
            return res.status(200).json(newProduct);
        }
        else{
            return res.status(500).json(newProduct);
        }
    },
    async updateProduct(req, res) {
        const {_id, name, description, price, amount} = req.body;
        const data = {name, description, price, amount};
        const product = await Product.findOneAndUpdate({_id}, data, {new:true})

        return res.json(product)
    }
}