const express = require('express');
const router = express.Router();
const MovieReviews = require('../models/MovieReviews')

router.get('/get-review', async (res,req) => {

    //We need await, to get data first from MongoDb
    //and it as a response to the route
    let reviews = await MovieReviews.find()

    res.send(reviews)
})

router.post('/new-review', (req, res) => {
    let {title, rating, comment} = req.body;
    // let title = req.body.title

    let newReview = new MovieReviews({
        title: title,
        rating: parseInt(rating),
        comment: comment
    })

    newReview.save()
    .then(response => {
        console.log(response)
        res.send({msg: 'new review send', mongo_response: response})
    }).catch(error => {
        console.log(error)
        res.send({msg:error})
    })
})

router.put('/update-review', (req,res) => {
    let {title, rating, comment, id} = req.body;

    let newData = {
        title: title,
        rating: parseInt(rating),
        comment: comment
    }

    MovieReviews.findByIdAndUpdate(id, newData)
    .then(response => {
        console.log(response)
        res.send({msg: 'Review was updated', mongo_response: response})
    }).catch(error => {
        res.send({msg: error})
    })
})

router.delete('/delete-review', (req, res) => {
    let {id} = req.body;

    MovieReviews.findByIdAndDelete(id)
    .then(response => {
        console.log(response)
        res.send({msg: `Review was deleted`, mongo_response: response})
    }).catch(error => {
        res.send({msg: error})
    })
})


module.exports = router;
