export default function CountryCard({country}) {
  console.log(country)
  const countryName = country.altSpellings[1];
  const population = country.population;
  const capital = country.capital
  const region  = country.continents[0]
  const flag = country.flags.png
  return (
    <div className="w-[70%] bg-[#fff] dark:bg-[#202C36] shadow-custom-light ">
      <div className="w-[100%] h-[50%]">
        <img src={`${flag}`}  alt="flag"/>
      </div>
      <h1>{countryName}</h1>
      <ul>
        <li>Population <span>{population}</span></li>
        <li>Region <span>{region}</span></li>
        <li>Capital <span>{capital}</span></li>
      </ul>
    </div>
  )
}
