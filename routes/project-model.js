const db = require('../data/db-config')

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask,
}


// PROJECTS

function getProjects() {
    return db('projects');
}

function addProject(changes) {
    return db('projects')
        .insert(changes)
        .then(id => id[0])
}


// RESOURCES

function getResources(project_id) {
    return db('resources as r')
        .innerJoin('project_resources as p', 'p.resource_id', '=', 'r.id')
        .select('r.resource_name', 'r.description')
        .where({ project_id })
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(id => id[0])
}


//TASKS

function getTasks(project_id) {
    return db('tasks')
        .where({ project_id })
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(id => id[0])
}