import { CountryLanguages } from '@entities/CountryLanguages'
import { countries } from '@constants/countries'
import { indexOfMaxValue } from '@util/math'

export class CountryRepository {

    private countryLanguages: CountryLanguages[] = countries;

    async getAll(): Promise<CountryLanguages[]> {
        return new Promise(resolve => resolve(this.countryLanguages))
    }

    async count(): Promise<number> {
        return new Promise(resolve => resolve(this.countryLanguages.length))
    }

    async mostOfficialLanguages(officialLanguage?: string) {
        const countriesLanguages = await this.getAll()

        const index = indexOfMaxValue(countriesLanguages.map(
            ((e: CountryLanguages) => officialLanguage ? e['languages'].includes(officialLanguage) : e['languages'].length))
        )

        return countriesLanguages[index]
    }

    async mostCommonOfficialLanguage(): Promise<string[]> {

        const countriesOfficialLanguages = await this.getAll()
        const allLanguages = Array.prototype.concat.apply([],
            countriesOfficialLanguages.map((countryInfo: CountryLanguages) => countryInfo.languages)
        )
        const seen = new Set();
        return allLanguages.filter(n => seen.size === seen.add(n).size);

    }

}