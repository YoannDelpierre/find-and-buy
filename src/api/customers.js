const Chance = require('chance');

const generatUniqueCustomer = () => {
    const chance = new Chance();
    return {
        id: chance.guid(),
        lastName: chance.last(),
        firstName: chance.name(),
        phone: chance.phone({ country: 'fr' })
    }
};

export const generateCustomers = (count = 10) => {
    let customers = [];
    for(let i = 0; i < count; i++) {
        customers.push(generatUniqueCustomer());
    }
    return customers;
}