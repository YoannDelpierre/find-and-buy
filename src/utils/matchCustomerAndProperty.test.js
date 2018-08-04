import { isSurfaceMatch, isPriceMatch, isRoomsMatch, matchProperty } from './matchCustomerAndProperty';

describe('isSurfaceMatch', () => {
    it('should return false', () => {
        expect(isSurfaceMatch(100, 20)).toBe(false);
    });

    it('should return true', () => {
        expect(isSurfaceMatch(100, 105)).toBe(true);
    });
});

describe('isPriceMatch', () => {
    it('should return false', () => {
        expect(isPriceMatch(100000, 20000)).toBe(false);
    });

    it('should return true', () => {
        expect(isPriceMatch(100000, 100231)).toBe(true);
    });
});

describe('isRoomsMatch', () => {
    it('should return false', () => {
        expect(isRoomsMatch(4, 9)).toBe(false);
    });

    it('should return true', () => {
        expect(isRoomsMatch(4, 3)).toBe(true);
    });
});