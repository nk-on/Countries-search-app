import { Link, useParams } from "react-router";
import type { Country, NotFound } from "../../DataInterface";
import useFetchData from "../../useFetchData";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import DataContainer from "./DataCointainer";
import { NotFoundPage } from "../NotFoundPage";
import Loading from "../Loading";
countries.registerLocale(enLocale);
export default function CountryPage() {
  const { id } = useParams();
  const data: Country[] | undefined | NotFound = useFetchData(
    `https://restcountries.com/v3.1/name/${id}`
  );
  if (data === undefined) {
    return <Loading />
  }
  if ("status" in data && data.status === 404) {
    return <NotFoundPage />
  }
  const country = data?.[0];
  const borderingCountries = country?.borders;
  const name = country?.altSpellings[1];
  const countryName = country.name.common;
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
        <div className="w-[136px] h-[40px] rounded-[5px] dark:bg-[#2B3844] bg-[#FAFAFA] absolute flex items-center justify-center gap-[25px] lg:left-[10%] left-[15%] top-[17%] cursor-pointer dark:text-[#fff]">
          <div className="w-[20px] h-[20px] bg-[url(public/back.svg)] dark:bg-[url(public/backNigt.svg)] ">
          </div>
          Back
        </div>
      </Link>
      <div className="w-[100%] h-[100vh]  flex flex-col lg:flex-row items-center custom-search-bar pt-[30%] lg:pt-[0%] lg:m-[0%] justify-evenly dark:bg-[#202C36] dark:text-[#fff]">
        <div>
          <img src={flag} className="lg:h-[401px] lg:w-[560px] w-[50vw]" />
        </div>
        <div className="flex flex-col w-[30%]">
          <h1 className="font-bold lg:text-[32px] text-[22px]">{countryName}</h1>
          <div className="flex lg:flex-row flex-col justify-between">
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
                const countryName = countries.getName(country, "en");
                if (country !== "UNK") {
                  return (
                    <li
                      key={idx}
                      className="min-w-[96px] h-[28px] dark:bg-[#2B3844] bg-[#fff] shadow-custom-border flex justify-center items-center cursor-pointer"
                    >
                      <Link to={`/${countryName}`}>{countryName}</Link>
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
