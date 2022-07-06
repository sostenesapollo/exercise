import ValidateNumbersService from '@services/numbers-validation/NumbersValidation.service'


export default class NumbersExercise {

    /**
     * Creates an instance of NumbersExercise.
     * @param {ValidateNumbersService} validateNumbersService
     * @memberof NumbersExercise
     */
    constructor(
        private readonly validateNumbersService: ValidateNumbersService
    ) { }

    /**
     * This method returns an array with validations contained in validateNumbersService
     * @param {number} lastNumber
     * @return {array} validatedValues 
     * @memberof NumbersExercise
     */
    getFirstNumbersWithValidations(lastNumber: number) {

        let currentNumber = 1
        let output: any = []

        while (currentNumber <= lastNumber) {

            const divisibleByThree = this.validateNumbersService.isNumberDivisible(currentNumber, 3)
            const divisibleByFive = this.validateNumbersService.isNumberDivisible(currentNumber, 5)

            if (divisibleByThree && divisibleByFive) {
                output.push('Visual Nuts')
            } else if (divisibleByThree) {
                output.push('Visual')
            } else if (divisibleByFive) {
                output.push('Nuts')
            } else {
                output.push(currentNumber.toString())
            }

            currentNumber++

            if (currentNumber > lastNumber) {
                break
            }
        }

        return output
    }

}