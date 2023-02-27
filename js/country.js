// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
//     const countriesContainer = document.getElementById('all-countries');
//     // console.log(countries);
//     // for (const country of countries) {
//     //     console.log(country);
//     // }
//     // applying forEachLoop
//     countries.forEach(country => {
//         console.log(country.name.common)
//         const countryDiv = document.createElement('div');
//         countryDiv.classList.add('country');
//         countryDiv.innerHTML = `
//         <h3>Name : ${country.name.common}</h3>
//         <p>Capital : ${country.capital ? country.capital[0] : 'No capital'}</p>
//         `;
//         countriesContainer.appendChild(countryDiv);
//     });
// }

// loadCountries()



// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }


// const displayCountries = countries => {
//     const countriesContainer = document.getElementById('all-countries');
//     // console.log(countries);
//     // for (const country of countries) {
//     //     console.log(country);
//     // }
//     countries.forEach(country => {
//         console.log(country.name.common);
//         const countryDiv = document.createElement('div');
//         countryDiv.classList.add('country');
//         countryDiv.innerHTML = `
//         <h3>Name :${country.name.common}</h3>
//         `;
//         countriesContainer.appendChild(countryDiv);
//     })
// }

// loadCountries();


// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => myFunction(data))
// }

// const myFunction = country => {
//     const countryContainer = document.getElementById('all-countries');
//     // console.log(country)

//     country.forEach(myArrowFunction => {
//         console.log(myArrowFunction.name.common)
//         const myCountryDiv = document.createElement('div');
//         myCountryDiv.classList.add('myArrowFunction');
//         myCountryDiv.innerHTML = `
//         <h3>Name : ${myArrowFunction.name.common} </h3>
//         `;
//         countryContainer.appendChild(myCountryDiv);
//     })
// }


// loadCountries();



const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => arrFunction(data))
}

const arrFunction = myCountry => {
    const myContainer = document.getElementById('all-countries');
    // console.log(myCountry);

    myCountry.forEach(myArr => {
        console.log(myArr.cca2);
        const createDiv = document.createElement('div');
        createDiv.classList.add('myCountry')
        createDiv.innerHTML = `
        <h3>Name : ${myArr.name.common} </h3>
        <p>Capital :${myArr.capital ? myArr.capital[0] : 'Not Capital'}</p>
        <button onclick ="loadCountryDetails('${myArr.cca2}')">Details</button>
        `;
        myContainer.appendChild(createDiv);
    })

}

// const loadCountryDetails = code => {
//     // https://restcountries.com/v3.1/alpha/{code}
//     const url = `https://restcountries.com/v3.1/alpha/${code}`
//     // console.log(url)
//     fetch(url)
//         .then(res => res.json())
//         .then(data => showCountryDetails(data[0]));
// }


// const showCountryDetails = allCountry => {
//     console.log(allCountry);
//     const detailsContainer = document.getElementById('Country-details')
//     detailsContainer.innerHTML = `
//     <h3>Name : ${allCountry.name.common}</h3>
//     <img src = "${allCountry.flags.png}">
//     `;
// }


// loadCountries();











//practices perfuse

// const loadCountryDetails = code => {
//     const url = `https://restcountries.com/v3.1/alpha/${code}`;
//     // console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => showCountryDetails(data[0]))
// }

// const showCountryDetails = allCountry => {
//     console.log(allCountry);
//     const detailsContainer = document.getElementById('Country-details');
//     detailsContainer.innerHTML = `
//     <h3>Name : ${allCountry.name.common}</h3>
//     <img src = "${allCountry.flags.png}">
//     `;
// }

// loadCountries();