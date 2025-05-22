import { useRef } from "react";

interface searchBar {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}
export default function SearchBar({setQuery}:searchBar) {
  const typedString = useRef<string>('');
  return (
    <div className="px-[30px] lg:w-[480px]  h-[70px]   dark:bg-[#2B3844] bg-[#fff]  flex justify-between items-center shadow-custom-light">
      <div>
        <img src="public/search.svg" onClick={()=>{
          setQuery(typedString.current )
        }} />
      </div>
      <input
        type="text"
        placeholder="search for a country"
        className="h-[100%] w-[90%] outline-none dark:bg-[#2B3844]"
        onChange={(e)=>{
          typedString.current = e.target.value;
        }}
      />
    </div>
  );
}
