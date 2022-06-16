//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountry = async () => {
  const link = `https://restcountries.com/v3.1/all`;
  const res = await fetch(link);
  const data = await res.json();
  // console.log(data[0]);
  const countrySelect = document.querySelector(".country");
  await data.forEach((country) => {
    countrySelect.innerHTML += `<option class="countryName">${country.name.common}</option>`;
    console.log(country.name.common);
  });
};
fetchCountry();
