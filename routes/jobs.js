const express = require('express');
const router = express.Router();
const Jobs = require('../models/jobs');

// REQUEST GET ALL JOBS
router.get ('/', (req, res) => {
    Jobs.find()
    .then(job => res.json(job))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


// REQUEST ADD NEW JOB
router.post('/add', (req, res) =>{
    const newJob = new Jobs({
        title: req.body.title,
        name: req.body.name,
        description: req.body.description,
        email: req.body.email
    })


newJob
.save()
.then(() => res.json("New job posted succesfully"))
.catch( err => res.status(400).json(`Error: ${err}`));

});




//FIND JOB BY ID
router.get('/:id', (req, res) =>{
    Jobs.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json(`Error: ${err}`))
})





//FIND JOB BY ID AND UPDATE
router.put('/update/:id', (req, res) =>{
    Jobs.findById(req.params.id)
    .then(job => {
        job.title = req.body.title;
        job.description = req.body.description;
        job.email = req.body.email;

        job
        .save()
        .then(() => res.json("The job post is updated"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


//FIND JOB ID AND DELETE
router.delete('/:id', (req, res) =>{
    Jobs.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article is deleted"))
    .catch(err => res.status(400).json(`Error:  ${err}`));
});





module.exports = router;




