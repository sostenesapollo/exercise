import { CountryLanguages } from '@entities/CountryLanguages'
import { countries } from '@constants/countries'

export class CountryRepository {

    private countryLanguages: CountryLanguages[] = countries;

    /**
     *  This methods returns all records
     *
     * @return {*}  {Promise<CountryLanguages[]>}
     * @memberof CountryRepository
     */
    async getAll(): Promise<CountryLanguages[]> {
        return new Promise(resolve => resolve(this.countryLanguages))
    }

    /**
     * This method returns the quantity of records (rows).
     *
     * @return {*}  {Promise<number>}
     * @memberof CountryRepository
     */
    async count(): Promise<number> {
        return new Promise(resolve => resolve(this.countryLanguages.length))
    }

}