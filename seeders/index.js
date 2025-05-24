'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const seedersPath = __dirname;

    const files = fs
      .readdirSync(seedersPath)
      .filter(file => {
        return file.endsWith('.js') && file !== 'index.js';
      })
      .sort(); // đảm bảo thứ tự chạy: 1-, 2-, ...

    for (const file of files) {
      const seeder = require(path.join(seedersPath, file));
      if (typeof seeder.up === 'function') {
        console.log(`⏳ Seeding: ${file}`);
        await seeder.up(queryInterface, Sequelize);
        console.log(`✅ Done: ${file}`);
      }
    }
  }
};
