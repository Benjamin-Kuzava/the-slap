const db = require('../db/connection')
const Product = require('../models/p')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products = 
    [
        {