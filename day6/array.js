//  Get all the countries from Asia continent /region using Filter method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {

    const asianCountries = data.filter(country => country.region === 'Asia');
    
    console.log(asianCountries.map(country => country.name.common));
  })

  //Get all the countries with a population of less than 2 lakhs using Filter method

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    
    console.log(smallPopulationCountries.map(country => country.name.common));
  })

  //Print the following details name, capital, flag, using forEach method

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(Name: ${country.name.common});
      console.log(Capital: ${country.capital ? country.capital[0] : 'N/A'});
      console.log(Flag: ${country.flags ? country.flags[0] : 'N/A'});
      console.log('---');
    });
  })

  //Print the total population of countries using reduce method

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    
    console.log(Total Population: ${totalPopulation});
  })

  //Print the country that uses US dollars as currency.

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesUsingUSD = data.filter(country => 
      country.currencies && 
      Object.values(country.currencies).some(currency => currency.name === 'United States dollar')
    );
    
    console.log(countriesUsingUSD.map(country => country.name.common));
  })