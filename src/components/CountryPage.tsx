import { useParams } from "react-router";
import type { Country } from "../DataInterface";
import useFetchData from "../useFetchData";
function DataContainer({ title, data }) {
  return (
    <div className="flex flex-row">
      <h3 className="font-bold">{title}:</h3>
      <span>{data}</span>
    </div>
  );
}
export default function CountryPage() {
  const { id } = useParams();
  const data:Country[] = useFetchData('https://restcountries.com/v3.1/all')
  const country = data?.find((element) => Number(id) === element.area)
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
    <div className="w-[100%] h-[100%] flex items-center justify-evenly">
      <div>
        <img src={flag} className="h-[401px] w-[560px]" />
      </div>
      <div className="flex w-[30%] justify-between">
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
    </div>
  );
}
