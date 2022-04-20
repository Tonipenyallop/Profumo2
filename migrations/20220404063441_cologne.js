/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cologne", (table) => {
    table.increments();

    table.string("name").notNullable();
    table.string("url").notNullable();
    table.text("description").notNullable();
    table.string("size").notNullable();
    table.string("concentration").notNullable();
    table.integer("price").notNullable();
    table.json("seasons").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cologne");
};
