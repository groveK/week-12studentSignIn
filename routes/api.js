let express = require('express')
let db = require('../models')
let Student = db.Student

let router = express.Router()

//request to pull existing data
router.get('/students', function(req, res, next){
    Student.findAll().then(students => {
        return res.json(students)
    })
})

//request to create data
router.post('/students', function(req, res, next) {
    Student.create(req.body).then(data => {
        return res.status(201).send('success')
    })
    //contains any json that Vue client has sent
})

module.exports = router