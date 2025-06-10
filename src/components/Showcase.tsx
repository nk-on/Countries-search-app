import CountryCard from "./CountryCard/CountryCard";
import SearchBar from "./SearchBar";
import SelectForm from "./selectionForm/SelectForm";
import { useContext } from "react";
import useFetchData from "../useFetchData";
import type { Country } from "../DataInterface";
import { DataContext } from "../DataContext";
import { NotFoundPage } from "./NotFoundPage";
import type { FetchResults } from "../DataInterface";
function Showcase() {
  const FetchedData: FetchResults = useFetchData(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,continents"
  );
  if (FetchedData.error) {
    return <NotFoundPage />;
  }
  const { selectedRegion } = useContext(DataContext);
  const { data } = FetchedData;
  const filteredData: Country[] | undefined = data?.filter(
    (element) => element.region === selectedRegion
  );
  return (
    <div className="max-w-[100vw] min-h-[90%] dark:bg-[#202C36] bg-[#FAFAFA]">
      <div className="w-[97%] relative top-[30px] flex flex-col gap-[10px] lg:pl-[0] pl-[5px] lg:flex-row justify-between  lg:items-center  mt-[30px]">
        <SearchBar />
        <SelectForm />
      </div>
      <div
        className="lg:mt-[5%] mt-[20%] grid lg:grid-cols-[25%_25%_25%_25%] grid-cols-1 place-items-center
  w-[100%]"
      >
        {selectedRegion === "All"
          ? data?.map((country, index) => {
              return <CountryCard key={index} country={country} />;
            })
          : filteredData?.map((country, index) => {
              return <CountryCard key={index} country={country} />;
            })}
      </div>
    </div>
  );
}

export default Showcase;
