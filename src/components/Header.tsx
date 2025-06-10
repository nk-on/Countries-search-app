import React from 'react'
interface HeaderProps {
  setDark:React.Dispatch<React.SetStateAction<boolean>>
}
function Header({setDark}:HeaderProps) {
  return (
    <div className='absolute w-[100%] h-[80px] top-[0] left-[0] bg-[#fff] dark:text-[#fff]  dark:bg-[#2B3844]  shadow-custom-light flex justify-between items-center pr-[50px]pt-[35px] px-[40px] lg:px-[70px]'>
      <h2 className='text-[#111517] font-bold dark:text-[#fff]'>Where in the world?</h2>
      <div className='flex gap-[10px]' onClick={()=>{
        setDark(dark => !dark)
      }}>
        <h3>Dark Mode</h3>
        <img src='./darkModeIcon.svg' alt='dark-mode' className='w-[20px] h-[20px]' />
      </div>
    </div>
  )
}

export default Header
