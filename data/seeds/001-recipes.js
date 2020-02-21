exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { description: "rowValue1" },
        { description: "rowValue2" },
        { description: "rowValue3" }
      ]);
    });
};
