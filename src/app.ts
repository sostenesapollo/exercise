import { CountryRepository } from '@repositories/CountryRepository'
import CountryService from '@services/country/Country.service'
import LoggingService from '@services/logging/Logging.service'
import NumbersExercise from '@services/numbers-exercise/NumbersExercise.service'
import NumbersValidationService from '@services/numbers-validation/NumbersValidation.service'

(async () => {

    // First Exercise
    const numbersValidationService = new NumbersValidationService()
    const numbersExercise = new NumbersExercise(numbersValidationService)

    const results: any[] = numbersExercise.getFirstNumbersWithValidations(100)

    const loggingService = new LoggingService({ level: 'info' })

    for (const result in results) {
        loggingService.log(results[result])
    }

    // Second Exercise
    const countryRepository = new CountryRepository()
    const countryService = new CountryService(countryRepository)

    const countries = await countryService.getAll()
    loggingService.log(countries);

    const numberOfCountries = await countryService.count()
    loggingService.log(numberOfCountries);

    const officalLanguage = 'de'
    const mostOfficialLanguagesCountrySpeakerOfGerman = await countryService.mostOfficialLanguages(officalLanguage)
    loggingService.log(mostOfficialLanguagesCountrySpeakerOfGerman);

    const mostOfficialLanguagesCountry = await countryService.mostOfficialLanguages()
    loggingService.log(mostOfficialLanguagesCountry);

    const countriesMostCommonLanguage = await countryService.mostCommonLanguage()
    loggingService.log(countriesMostCommonLanguage);


})()