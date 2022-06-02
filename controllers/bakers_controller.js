const express = require('express')
const bakers = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

bakers.get('/', (req, res) => {
    Baker.find()
        .populate({ 
            path: 'breads',
            options: { limit: 5}
        })
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

bakers.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

bakers.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

bakers.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then(deletedBaker => {
            res.status(303).redirect('/breads')
        })
})

module.exports = bakers