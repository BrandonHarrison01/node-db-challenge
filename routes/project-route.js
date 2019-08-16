const express = require('express')

const project = require('./project-model')

const router = express.Router()


// GET projects

router.get('/', (req, res) => { 
    project
        .getProjects()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ eror: 'there was an error' }))
})


// POST project

//


// GET resources

router.get('/:id/resources', (req, res) => {
    const { id } = req.params

    project
        .getResources(id)
        .then(resources => res.status(200).json(resources))
        .catch(error => res.status(500).json({ error: 'there was an error' }))
})


// POST resources

//


// GET tasks

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params

    project
        .getTasks(id)
        .then(tasks => res.status(200).json(tasks))
        .catch(error => res.status(500).json({ error: 'there was an error' }))
})


// POST tasks

//

module.exports = router