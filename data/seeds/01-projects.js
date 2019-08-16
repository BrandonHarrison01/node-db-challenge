
exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'New Project', description: 'this is a new project', complete: false },
    { name: 'Old Project', description: 'this is an old project', complete: false },
    { name: 'Project', description: 'this is a project', complete: false }
  ]);
};