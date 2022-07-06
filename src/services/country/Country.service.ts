import { CountryRepository } from '@repositories/CountryRepository'

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

    mostOfficialLanguages(officalLanguage?: string) {
        return this.countryRepository.mostOfficialLanguages(officalLanguage)
    }

    mostCommonLanguage(): Promise<string[]> {
        return this.countryRepository.mostCommonLanguage()
    }

}