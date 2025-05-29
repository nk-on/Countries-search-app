import { Link, useParams } from "react-router";
import type { Country } from "../../DataInterface";
import useFetchData from "../../useFetchData";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import DataContainer from "./DataCointainer";
countries.registerLocale(enLocale);
export default function CountryPage() {
  const { id } = useParams();
  const country:Country = useFetchData(`https://restcountries.com/v3.1/alpha?codes=${id}`);
  const borderingCountries = country?.borders;
  const name = country?.altSpellings[1];
  const flag = country?.flags.svg;
  const nativeName = country?.altSpellings[2];
  const population = country?.population;
  const region = country?.region;
  const subRegion = country?.subregion;
  const capital = country?.capital;
  const countryCode = country?.tld[0];
  const currencyObj = country?.currencies;
  let currency: string | undefined;
  let currencyName: string | undefined;
  if (currencyObj) {
    currency = Object.keys(currencyObj)[0];
    currencyName = currencyObj[currency]?.name;
  }
  return (
    <>
      <Link to={"/"}>
        <div className="absolute flex items-center gap-[5px] left-[10%] top-[20%] cursor-pointer">
          <img src="public/back.svg" alt="back-button" />
          Back
        </div>
      </Link>
      <div className="w-[100%] h-[100%] flex items-center justify-evenly">
        <div>
          <img src={flag} className="h-[401px] w-[560px]" />
        </div>
        <div className="flex flex-col w-[30%]">
          <div className="flex justify-between">
            <div>
              <DataContainer title="Country Code" data={countryCode} />
              <DataContainer title="Country Name" data={name} />
              <DataContainer title="Native Name" data={nativeName} />
              <DataContainer title="Population" data={population} />
              <DataContainer title="Region" data={region} />
              <DataContainer title="Subregion" data={subRegion} />
              <DataContainer title="Capital" data={capital} />
            </div>
            <div>
              <DataContainer title="Top level domain" data={countryCode} />
              <DataContainer title="Currency" data={currencyName} />
            </div>
          </div>
          <div className="flex">
            <h3 className="font-bold">Border countries:</h3>
            <ul className="flex flex-wrap justify-between">
              {borderingCountries?.map((country, idx) => {
                if (country !== "UNK") {
                  return (
                    <li
                      key={idx}
                      className="min-w-[96px] h-[28px] shadow-custom-gray flex justify-center items-center cursor-pointer"
                    >
                      <Link to={`/${country}`}>{countries.getName(country, "en")}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
