const mongoose = require('mongoose')
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

async function startDB() {
    await mongoose
        .connect(MONGODB_URL, { useNewUrlParser: true })
        .catch(e => {
            console.error('Connection error', e.message)
        })

}

module.exports = startDB;