import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import SelectForm from "./selectionForm/SelectForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../DataContext";
function Showcase() {
  const [query, setQuery] = useState<string>("");
  const {data,setData} = useContext(DataContext);
  async function fetchData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const fetchedData = await res.json();
    setData(fetchedData);
  }
  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <div className="max-w-[100vw] h-[90%] dark:bg-[#202C36] bg-[#FAFAFA]">
      <div className="w-[100%] relative top-[30px] flex flex-col gap-[30px] lg:flex-row justify-between lg:items-center px-[30px]">
        <SearchBar setQuery={setQuery} />
        <SelectForm />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-[50px] grid grid-cols-4  w-[100%]">
          {data?.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
