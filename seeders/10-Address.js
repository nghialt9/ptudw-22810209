const faker = require('faker');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const addresses = [
            {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                country: faker.address.country(),
                zipCode: faker.address.zipCode(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                country: faker.address.country(),
                zipCode: faker.address.zipCode(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        await queryInterface.bulkInsert('Addresses', addresses, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Addresses', null, {});
    }
}; 