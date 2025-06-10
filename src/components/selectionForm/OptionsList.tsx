import { continents } from "../../Continents";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
export default function OptionsList() {
  const { setSelectedRegion } = useContext(DataContext);
  return (
    <div className="w-[200px] absolute  flex flex-col px-[10px] mt-[20px] py-[10px] dark:bg-[#2B3844] dark:text-[#fff]">
      {continents.map((continent) => {
        return (
          <h2
            className="cursor-pointer"
            key={continent.id}
            onClick={() => setSelectedRegion(continent.name)}
          >
            {continent.name}
          </h2>
        );
      })}
    </div>
  );
}
