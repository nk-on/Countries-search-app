import { useState } from "react";
import OptionsList from "./OptionsList";

export default function SelectForm() {
  const [optionsListVisable,setOptionsListVisable] = useState(false)
  return (
    <div>
      <div className={`w-[200px]  shadow-custom-light flex  flex-col justify-between items-center ${optionsListVisable && 'mt-[10%]'} cursor-pointer`}>
        <div className="flex justify-between w-[100%] bg-[#fff] dark:bg-[#2B3844] p-[10px]">
          <h1 className="dark:text-[#fff]">Filter by region</h1>
          <div  className="w-[20px] h-[20px] mt-[7px]  bg-[url('./expand-more.svg')] dark:bg-[url('./Expand.svg')]  bg-no-repeat" onClick={()=> setOptionsListVisable(optionsListVisable => !optionsListVisable)} ></div>
        </div>
      </div>
      {optionsListVisable && <OptionsList />}
    </ div>
  );
}
