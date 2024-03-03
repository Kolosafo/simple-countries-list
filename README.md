# simple-countries-list

Simple package for getting all world countries and their short names.


## Installation

```bash
npm i simple-countries-list
```

## Usage

```javascript
import {countryNames, countryShortNames, countries, getCountry} from 'simple-countries-list';

// returns an array of all country names in order
console.log(await countryNames()); //["Afghanistan", "Albania"....]

// returns an array of all country short names in order
console.log(await countryShortNames()); //["AF", "AL"....]

// returns an array of all countries and their short names in order
console.log(await countries()); // [{ name: "Afghanistan", shortName: "AF" } ...]

// returns a single country/shortName object
console.log(await getCountry("Nigeria"));  //{ name: "Nigeria", shortName: "NG" },

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)