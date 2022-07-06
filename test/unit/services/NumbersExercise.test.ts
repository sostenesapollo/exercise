import NumbersValidation from "@services/numbers-validation/NumbersValidation.service";

describe('ValidateNumbers', () => {

    const validateNumbersSpy = new NumbersValidation()

    test('isNumberDivisible should validate if a number is divisible by another', () => {
        expect(validateNumbersSpy.isNumberDivisible(10, 2)).toBe(true);
        expect(validateNumbersSpy.isNumberDivisible(10, 3)).toBe(false);
        expect(validateNumbersSpy.isNumberDivisible(4, 2)).toBe(true);
        expect(validateNumbersSpy.isNumberDivisible(1, 2)).toBe(false);
    });

})