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
    table.integer("spring").notNullable();
    table.integer("summer").notNullable();
    table.integer("fall").notNullable();
    table.integer("winter").notNullable();
    table.integer("day").notNullable();
    table.integer("night").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cologne");
};
