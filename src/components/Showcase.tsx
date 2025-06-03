import CountryCard from './CountryCard/CountryCard';
import SearchBar from './SearchBar';
import SelectForm from './selectionForm/SelectForm';
import { useContext } from 'react';
import useFetchData from '../useFetchData';
import type { Country } from '../DataInterface';
import { DataContext } from '../DataContext';
function Showcase() {
  const data: Country[] | undefined = useFetchData(
    'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,continents'
  );
  console.log(data)
  const { selectedRegion } = useContext(DataContext);
  const filteredData: Country[] | undefined = data?.filter(
    (element) => element.region === selectedRegion
  );
  return (
    <div className="max-w-[100vw] min-h-[90%] dark:bg-[#202C36] bg-[#FAFAFA]">
      <div className="w-[90%] relative top-[30px] pl-[150px] flex flex-col gap-[30px] lg:flex-row justify-between lg:items-center px-[30px] mt-[30px]">
        <SearchBar />
        <SelectForm />
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-[60px]">
        <div
          className=" grid lg:grid-cols-4 grid-cols-1 place-items-center
  w-[100%] gap-x-[400px]"
        >
          {selectedRegion === 'All'
            ? data?.map((country, index) => {
                return <CountryCard key={index} country={country} />;
              })
            : filteredData?.map((country, index) => {
                return <CountryCard key={index} country={country} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
