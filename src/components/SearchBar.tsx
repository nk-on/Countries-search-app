export default function SearchBar() {
  return (
    <div className="px-[30px] lg:w-[480px]  h-[70px]   dark:bg-[#2B3844] bg-[#fff]  flex justify-between items-center shadow-custom-light">
      <div>
        <img src="public/search.svg" />
      </div>
      <input
        type="text"
        placeholder="search for a country"
        className="h-[100%] w-[90%] outline-none dark:bg-[#2B3844]"
      />
    </div>
  );
}
