export class CountryService{

    getCountries(){
        return fetch('../assets/datasource/countries.json')
            .then(res=>res.json())
            .then(d=>d.data)


    }

}
