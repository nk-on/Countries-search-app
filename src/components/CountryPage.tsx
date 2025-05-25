import { useContext } from "react";
import { DataContext } from "../DataContext";
import { useParams } from "react-router";
function DataContainer({ title, data }) {
  return (
    <div className="flex flex-row">
      <h3>{title}:</h3>
      <span>{data}</span>
    </div>
  );
}
export default function CountryPage() {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const country = data?.find((element) => Number(id) === element.area);
  console.log(country);
  const name = country?.altSpellings[1];
  const flag = country?.flags.png;
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
    <div className="w-[100%] h-[100%]">
      <div>
        <img src={flag}></img>
      </div>
      <div>
        <DataContainer title="Country Code" data={countryCode} />
        <DataContainer title="Country Name" data={name} />
        <DataContainer title="Native Name" data={nativeName} />
        <DataContainer title="Population" data={population} />
        <DataContainer title="Region" data={region} />
        <DataContainer title="Subregion" data={subRegion} />
        <DataContainer title="Capital" data={capital} />
        <DataContainer title="Top level domain" data={countryCode} />
        <DataContainer title="Currency" data={currencyName} />
      </div>
    </div>
  );
}
