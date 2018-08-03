const Chance = require('chance');
const chance = new Chance();

const generateUniqueProperty = () => {
    const type = chance.bool() ? 'flat' : 'house';
    const surface = chance.integer({ min: 20, max: 200 })
    // Tricks for having rooms matches more or less surface
    const rooms = (Math.round((surface / 20)) * 100) / 100;

    return {
        id: chance.string({ length: 30 }),
        type,
        rooms,
        surface,
        cave: chance.bool(),
        // specific for house
        ...(type === 'house' && {
            garden: chance.integer({ min: 350, max: 1500 }),
        }),
        // specific for flat
        ...(type === 'flat' && {
            elevator: chance.bool(),
        }),
    };
};

export const generateProperties = (count = 10) => {
    let properties = [];
    for(let i = 0; i < count; i++) {
        properties.push(generateUniqueProperty());
    }
    return properties;
}