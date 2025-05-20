
import React from 'react'

export default function SearchBar() {
  return (
    <div className='w-[480px] h-[80px]  dark:bg-[#2B3844] bg-[#fff] shadow-search-bar flex justify-between items-center shadow-custom-light'>
        <div>
            <img src='public/search.svg' />
        </div>
      <input type='text' placeholder='search for a country' className='h-[100%] w-[90%]' />
    </div>
  )
}
