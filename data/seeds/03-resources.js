
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: 'Cereal and Milk', description: 'this is a descrption' },
    { resource_name: 'Ice', description: 'this is another descrption' },
    { resource_name: 'Grilled Cheese Sandwich', description: 'this is also a descrption' },
    { resource_name: 'A Microverse Battery', description: 'this is more descrption' }
  ]);
};