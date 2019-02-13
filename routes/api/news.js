const express = require('express')
const router = express.Router()

// News Model
const News = require('../../models/news_model')

// @route   GET api/News
// @desc    Get All News
// @access  Public
router.get('/', (req, res) => {
    News.find()
        .then(result => {
            result.length == 0 ? res.send("Data Is Empty !") : res.json(result)
        })
})

// @route   GET api/News/:id
// @desc    Get Spesific News
// @access  Public
router.get('/:id', (req, res) => {
    News.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(404).json({success: false}))
})

// @route   POST api/News
// @desc    Create News
// @access  Public
router.post('/', (req, res) => {
    const newNews = new News({
        title: req.body.title,
        description: req.body.description
    })

    newNews.save().then(result => res.status(201).json(result))
})

// @route   UPDATE api/News/:id
// @desc    Update News
// @access  Public
router.put('/:id', (req, res) => {

    News.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(result => res.json(result).status(200))
        .catch(err => res.status(404).json({message: "not found bos"}))
})

// @route   DELETE api/News/:id
// @desc    Delete News
// @access  Public
router.delete('/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({success: true}))
    .catch(err => res.status(404).json({success: false}))
    
})

module.exports = router