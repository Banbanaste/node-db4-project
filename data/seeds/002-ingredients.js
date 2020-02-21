exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { description: "rowValue1", recipe_id: 1 },
        { description: "rowValue2", recipe_id: 1 },
        { description: "rowValue3", recipe_id: 2 }
      ]);
    });
};
