const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true 
    },
    category: {
        type: String,
        required: true, 
        trim: true 
    },
    unit: {
        type: String,
        required: true, 
        trim: true 
    },
    price: {
        type: Number,
        required: true, 
        min: 0 
    },
    amount: {
        type: Number,
        required: true, 
        min: 0 
    },
    description: {
        type: String,
        trim: true 
    },
    completed: { 
        type: Boolean,
        default: false 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    }
});


productSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});


const Product = mongoose.model('Product', productSchema);


module.exports = Product;