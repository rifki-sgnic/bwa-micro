"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rifki",
          profession: "Admin Micro",
          role: "admin",
          email: "sgnic@email.com",
          password: await bcrypt.hash("sagenic", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Saki Fuwa",
          profession: "Frontend Developer",
          role: "student",
          email: "saki@email.com",
          password: await bcrypt.hash("sakifuwa", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
