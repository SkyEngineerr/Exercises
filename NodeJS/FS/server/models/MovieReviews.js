const mongoose = require('mongoose');

const MovieRewviewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type:String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const MovieReviews = mongoose.model('MovieReviews', MovieRewviewsSchema)

module.exports = MovieReviews