export default class NumbersValidationService {

    isNumberDivisible(dividend: number, divisor: number) {
        return dividend % divisor == 0
    }

}