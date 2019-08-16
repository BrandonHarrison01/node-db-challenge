const express = require('express')

const project = require('./project-model')

const router = express.Router()


// GET projects

router.get('/', (req, res) => { 
    project
        .getProjects()
        .then(result => {
                result.forEach(result => {
                    if (result.complete) {
                        result.complete = true
                        // res.status(200).json(result)
                    } else {
                        result.complete = false
                        // res.status(200).json(result)
                    }
                })
                res.status(200).json(result)
        })
        // .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ eror: 'there was an error' }))
})


// POST project

router.post('/', (req, res) => {
    const changes = req.body
    console.log(req.body)

    project
        .addProject(changes)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json({ eror: 'there was an error' }))
})


// GET resources

router.get('/:id/resources', (req, res) => {
    const { id } = req.params

    project
        .getResources(id)
        .then(resources => res.status(200).json(resources))
        .catch(error => res.status(500).json({ error: 'there was an error' }))
})


// POST resources

router.post('/resources', (req, res) => {
    const changes = req.body
    console.log(req.body)

    project
        .addResource(changes)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json({ eror: 'there was an error' }))
})



// GET tasks

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params

    project
        .getTasks(id)
        .then(result => {
            result.forEach(result => {
                if (result.complete) {
                    result.complete = true
                } else {
                    result.complete = false
                }
            })
            res.status(200).json(result)
        })
        .catch(error => res.status(500).json({ error: 'there was an error' }))
})


// POST tasks

router.post('/tasks', (req, res) => {
    const changes = req.body
    console.log(req.body)

    project
        .addTask(changes)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json({ eror: 'there was an error' }))
})

module.exports = router