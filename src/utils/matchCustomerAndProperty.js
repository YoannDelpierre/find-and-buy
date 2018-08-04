export const isSurfaceMatch = (surfaceProperty, surfaceCustomer) => {
    return surfaceCustomer <= surfaceProperty * 1.10 && surfaceCustomer >= surfaceProperty * 0.90;
}

export const isPriceMatch = (priceProperty, priceCustomer) => {
    return priceCustomer <= priceProperty * 1.10 && priceCustomer >= priceProperty * 0.90;
}

export const isRoomsMatch = (roomsProperty, roomsCustomer) => {
    return roomsCustomer <= roomsProperty + 1 && roomsCustomer >= roomsProperty - 1;
}

export const matchProperty = (property, customers) => {
    const { price, surface, rooms } = property;
    return customers.reduce((acc, customer) => {
        let score = 0;
        const { search } = customer;
        const { surface: searchSurface, budget, rooms: roomsSearch } = search;

        if (isSurfaceMatch(surface, searchSurface)) {
            score += 1;
        }

        if (isPriceMatch(price, budget)) {
            score += 2;
        }

        if (isRoomsMatch(rooms, roomsSearch)) {
            score += 1;
        }

        // We take only customer with a score >= 2
        if(score >= 2) {
            customer.search = {
                ...customer.search,
                score: score,
            }
            acc.push(customer)
        };

        return acc;
    }, []);
}