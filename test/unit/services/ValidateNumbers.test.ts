import NumbersValidation from "@services/numbers-validation/NumbersValidation.service";
import NumbersExercise from "@services/numbers-exercise/NumbersExercise.service";
import { testsAndResults } from "../../results/ValidateNumbers.results";

describe('NumbersExercise', () => {

    const numbersValidationSpy = new NumbersValidation()
    const numbersExercise = new NumbersExercise(numbersValidationSpy)

    test('getFirstNumbersWithValidations array return should match a certain result.', () => {

        for (const { test, result } of testsAndResults) {
            expect(numbersExercise.getFirstNumbersWithValidations(test)).toEqual(result)
        }

    });

})