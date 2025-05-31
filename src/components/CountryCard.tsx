import { Link } from "react-router";
import type { Country } from "../DataInterface";
export default function CountryCard({ country }:{country:Country}) {
  const countryName = country.altSpellings[1];
  const population = country.population;
  const capital = country.capital;
  const region = country.continents[0];
  const flag = country.flags.png;
  const id = country.name.common
  return (
    <Link to = {`/${id}`}>
      <div className="mb-[40px] cursor-pointer w-[264px] bg-[#fff] dark:bg-[#202C36] shadow-custom-light ">
        <div className="w-[100%] min-h-[50%]">
          <img src={`${flag}`} alt="flag" />
        </div>
        <div className="">
          <h1>{countryName}</h1>
          <ul>
            <li>
              Population <span>{population}</span>
            </li>
            <li>
              Region <span>{region}</span>
            </li>
            <li>
              Capital <span>{capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
