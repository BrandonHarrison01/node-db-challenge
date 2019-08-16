
exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'New Project', decription: 'this is a new project', complete: false },
    { name: 'Old Project', decription: 'this is an old project', complete: false },
    { name: 'Project', decription: 'this is a project', complete: false }
  ]);
};