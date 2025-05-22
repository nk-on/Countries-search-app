import SearchBar from "./SearchBar"
import SelectForm from "./selectionForm/SelectForm"
import { useState } from "react"
function Showcase() {
  const [query,setQuery] = useState<string>('')
  return (
    <div className='w-[100vw] h-[90%] dark:bg-[#202C36] bg-[#FAFAFA]'>
      <div className="w-[100%] relative top-[30px] flex flex-col gap-[30px] lg:flex-row justify-between lg:items-center px-[30px]">
        <SearchBar setQuery = {setQuery} />
        <SelectForm />
      </div>
    </div>
  )
}

export default Showcase
