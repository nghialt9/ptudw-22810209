const controller = {};

controller.createDatabase = async () => {
  const models = require("../models");
  const seeder = require('../seeders');

  // Create Tables
  console.log("Creating tables...");
  await models.sequelize.sync();
  console.log("Tables created!");

  // Check data exist
  const data = await models.Product.findAll();
  if (data.length) {
    console.log("Data exist!");
    return;
  }

  // Import data
  console.log("Importing data...");
  try {
    await seeder.up(models.sequelize.getQueryInterface(), models.Sequelize);
    console.log('Seeder đã chạy thành công!');
  } catch (err) {
    console.error('Lỗi khi chạy seeder:', err);
  }
  console.log("Data imported!");
};

module.exports = controller;
