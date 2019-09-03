
exports.seed = function(knex) {
  return knex('tasks').insert([
    { description: 'get stuff done', notes: 'stuff needs to be done', complete: false, project_id: 1 },
    { description: 'things', notes: 'notes on some things', complete: false, project_id: 1 },
    { description: 'so many seeds', notes: 'i love making seeds', complete: false, project_id: 2 },
    { description: 'blah blah', notes: 'blah blah blah', complete: false, project_id: 2 },
    { description: 'lorem', notes: 'ipsum', complete: false, project_id: 3 },
    { description: 'its friday', notes: 'gotta get down on friday', complete: false, project_id: 3 },
  ]);
};