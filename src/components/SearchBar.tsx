import { useRef } from "react";
import { useNavigate } from "react-router";
export default function SearchBar() {
  const query = useRef('')
  const navigate = useNavigate();
  return (
    <div className="px-[30px] lg:w-[480px]  h-[70px]   dark:bg-[#2B3844] bg-[#fff]  flex justify-between items-center shadow-custom-light">
      <div>
        <img src="public/search.svg" className="cursor-pointer" onClick={()=>{
          navigate(`/${query.current}`)
        }} />
      </div>
      <input
        type="text"
        placeholder="search for a country"
        className="h-[100%] w-[90%] outline-none dark:bg-[#2B3844]"
        onKeyDown={(event)=>{
          if(event.key === "Enter"){
             navigate(`/${query.current}`)
          }
        }}
        onChange={(e)=>{
          query.current = e.target.value;
        }}
      />
    </div>
  );
}
