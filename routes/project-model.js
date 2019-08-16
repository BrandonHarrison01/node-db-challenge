const db = require('../data/db-config')

module.exports = {
    getProjects,
    // addProject,
    getResources,
    // addResource,
    getTasks,
    // addTask,
}

function getProjects() {
    return db('projects');
}

function getResources(project_id) {
    return db('resources as r')
        .innerJoin('project_resources as p', 'p.resource_id', '=', 'r.id')
        .select('r.resource_name', 'r.description')
        .where({ project_id })
}

function getTasks(project_id) {
    return db('tasks')
        .where({ project_id })
}