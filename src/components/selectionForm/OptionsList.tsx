import { continents } from "../../Continents";
export default function OptionsList() {
  return (
    <div className="w-[200px]  flex lg:flex-col px-[10px] mt-[20px] py-[10px] dark:bg-[#2B3844] dark:text-[#fff]">
      {continents.map((continent) => {
        return <h2>{continent.name}</h2>;
      })}
    </div>
  );
}
