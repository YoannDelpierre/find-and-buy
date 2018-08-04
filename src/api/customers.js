const Chance = require('chance');

const generatUniqueCustomer = (surface) => {
    const chance = new Chance();
    return {
        id: chance.guid(),
        lastName: chance.last(),
        firstName: chance.first(),
        phone: chance.phone({ country: 'fr' }),
        email: chance.email(),
        search: {
            surface: chance.integer({ min: surface * .8, max: surface * 1.2 }),
            budget: chance.integer({ min: surface * 5000, max: surface * 8500 }),
            rooms: (Math.round((surface / 20)) * 100) / 100,
        }
    }
};

export const generateCustomers = (count = 10, surface) => {
    let customers = [];
    for(let i = 0; i < count; i++) {
        customers.push(generatUniqueCustomer(surface));
    }
    return customers;
}