import { Search, ShoppingCartIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = ({ isCartOpen, onCartOpen }) => {

  const tabClass = ({ isActive }) =>
  isActive
    ? "text-orange-500"
    : "text-white";

  const [date, setDate] = useState(new Date());

    useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const dateToday = date.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className='bg-[#252836]'>
      <div className='md:ml-[112px] mt-10 px-6 flex flex-col gap-6 md:gap-10'>
        <div className='font-barlow md:flex flex-row items-center justify-between'>
        <div className="flex flex-col justify-between bg-[#252836]">
          <h1 className='text-white text-2xl md:text-3xl font-semibold'>Chef Kitchen</h1>
          <p className='text-slate-500 text-xs sm:text-xs md:text-sm font-medium'>{dateToday}</p>
        </div>
        <div className='flex flex-row gap-5 mt-4 sm:mt-4 md:mt-0'>
          <div className='flex flex-row items-center bg-[#2D303E] border border-[#393C49] rounded-lg py-2'>
            <Search className='ml-4 w-5 text-white'/>
            <input className='bg-[#2D303E] outline-none ml-2 mr-4 w-60 sm:w-60 md:w-52 text-white' type="search" name='search' placeholder='Search for food, coffe, etc..' />
          </div>

          {!isCartOpen && (
            <button onClick={onCartOpen}>
              <ShoppingCartIcon className='bg-orange-500 hover:bg-orange-600 text-white w-full h-full px-3 py-2 rounded-lg transition-all'/>
            </button>
          )}
        </div>
      </div>

      {/* TABS  */}
      <div className='flex flex-row gap-12 md:gap-20 pb-2 border-b-2 border-b-slate-500/50 font-semibold truncate'>
      
        <NavLink to="/menu/today" className={tabClass}>Today Special</NavLink>

        <NavLink to="/menu/special" className={tabClass}>Our Specials</NavLink>

        <NavLink to="/menu/south" className={tabClass}>South Indian</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Header
