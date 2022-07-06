import { CountryLanguages } from '@entities/CountryLanguages'
import { CountryRepository } from '@repositories/CountryRepository'
import { indexOfMaxValue } from '@utils/math'

export default class CountryService {

    constructor(
        private readonly countryRepository: CountryRepository
    ) { }

    getAll() {
        return this.countryRepository.getAll()
    }

    count() {
        return this.countryRepository.count()
    }

    /**
     * This method returns the country that officially speaks more languages
     * You can pass a filter that will verify if some language is included.
     *
     * @param {string} [officialLanguage]
     * @return {string} CountryLanguages
     * @memberof CountryRepository
     * 
     * @example
     * // We will get the country with the most number of official languages
     * mostOfficialLanguages()
     * 
     * // We will get the country with the most number of official languages that speaks a filtered language, in this case 'de' (Dutch)
     * mostOfficialLanguages('de')
     */
    async mostOfficialLanguages(officialLanguage?: string) {
        const countriesLanguages = await this.countryRepository.getAll()

        const index = indexOfMaxValue(countriesLanguages.map(
            ((e: CountryLanguages) => officialLanguage ? e['languages'].includes(officialLanguage) : e['languages'].length))
        )

        return countriesLanguages[index]
    }

    /**
     * This method returns the most common official languages for all the existing countries.
     * It returns an array with the the languages
     * @return {array}  {Promise<string[]>}
     * @memberof CountryRepository
     */
    async mostCommonOfficialLanguage(): Promise<string[]> {

        const countriesOfficialLanguages = await this.countryRepository.getAll()
        const allLanguages = Array.prototype.concat.apply([],
            countriesOfficialLanguages.map((countryInfo: CountryLanguages) => countryInfo.languages)
        )
        const seen = new Set();
        return allLanguages.filter(n => seen.size === seen.add(n).size);

    }

}