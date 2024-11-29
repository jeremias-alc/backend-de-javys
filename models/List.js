const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true 
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' 
    }],
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    }
});


listSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});


const List = mongoose.model('List', listSchema);


module.exports = List;