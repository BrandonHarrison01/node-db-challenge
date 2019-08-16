const express = require('express')

const server = express()

const ProjectRouter = require('./routes/project-route')

server.use('/api/projects', ProjectRouter)

server.get('/', (req, res) => {
    res.status(200).json({ this: 'is a sanity check'})
})

module.exports = server