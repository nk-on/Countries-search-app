import { Link } from 'react-router';
import type { Country } from '../../DataInterface';
import ListItem from './ListItem';
export default function CountryCard({ country }: { country: Country }) {
  const countryName = country.altSpellings[1];
  const population = country.population;
  const capital = country.capital;
  const region = country.continents[0];
  const flag = country.flags.png;
  const id = country.name.common;
  return (
    <Link to={`/${id}`}>
      <div className="mb-[40px] cursor-pointer w-[264px] min-h-[336px] bg-[#fff] dark:bg-[#2B3844;] shadow-custom-light dark:shadow-custom-dark rounded-[15px] ">
        <div className="w-[100%] min-h-[50%]">
          <img src={`${flag}`} alt="flag" className=' rounded-t-[15px] max-h-[160px' />
        </div>
        <div className='p-[20px] flex flex-col gap-[20px]'>
          <h1 className="font-bold text-[18px] dark:text-[#fff]">{countryName}</h1>
          <ul className='flex flex-col gap-[4px]'>
            <ListItem title={'Population'} data={String(population)} />
            <ListItem title={'Capital'} data={capital} />
            <ListItem title={'Region'} data={region} />
          </ul>
        </div>
      </div>
    </Link>
  );
}
