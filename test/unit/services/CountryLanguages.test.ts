import { CountryRepository } from "../../../src/repositories/CountryRepository";
import CountryLanguagesService from "../../../src/services/country/Country.service";

describe('CountryLanguages', () => {

    const countryRepository = new CountryRepository()
    const countryLanguages = new CountryLanguagesService(countryRepository)

    test('Should return the number of countries in the world', async () => {
        const totalCountries = await countryLanguages.count()
        expect(totalCountries).toEqual(5)
    });

    test('Should find the country with the most official languages, where they officially speak German(de)', async () => {
        const mostOfficialLangsWithDutch = await countryLanguages.mostOfficialLanguages('de')
        expect(mostOfficialLangsWithDutch.country).toEqual("BE")
        expect(mostOfficialLangsWithDutch.languages.sort()).toEqual(["nl", "fr", "de"].sort())
    });

    test('Should find the country with the highest number of official languages', async () => {
        const mostOfficialLangs = await countryLanguages.mostOfficialLanguages()
        expect(mostOfficialLangs.country).toEqual("BE")
        expect(mostOfficialLangs.languages.sort()).toEqual(["nl", "de", "fr"].sort())
    });

    test('Should find the most common official language(s), of all countries', async () => {
        const mostCommonLangs = await countryLanguages.mostCommonLanguage()
        expect(mostCommonLangs.sort()).toEqual(["de", "nl"].sort())
    });

})