import CountryCard from "./CountryCard/CountryCard";
import SearchBar from "./SearchBar";
import SelectForm from "./selectionForm/SelectForm";
import {  useContext } from "react";
import useFetchData from "../useFetchData";
import type { Country } from "../DataInterface";
import { DataContext } from "../DataContext";
import Loading from "./Loading";
function Showcase() {
  // const [query, setQuery] = useState<string>("");
  const data:Country[] | undefined  = useFetchData('https://restcountries.com/v3.1/all');
  const {selectedRegion} = useContext(DataContext);
  const filteredData:Country[] | undefined = data?.filter(element => element.region === selectedRegion)
  return (
    <div className="max-w-[100vw] h-[90%] dark:bg-[#202C36] bg-[#FAFAFA]">
      <div className="w-[100%] relative top-[30px] flex flex-col gap-[30px] lg:flex-row justify-between lg:items-center px-[30px]">
        <SearchBar  />
        <SelectForm />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-[50px] grid grid-cols-4  w-[100%]">
          {selectedRegion === "All" ?  data?.map((country, index) => {
              return <CountryCard key={index} country={country} />;
          }) :   filteredData?.map((country, index) => {
              return <CountryCard key={index} country={country} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
