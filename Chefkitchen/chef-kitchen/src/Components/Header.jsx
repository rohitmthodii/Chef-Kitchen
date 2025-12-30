import { Search, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ isCartOpen, onCartOpen }) => {
  const tabClass = ({ isActive }) =>
    isActive ? "text-orange-500" : "text-white";

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
    <div className="bg-[#252836]">
      <div className="px-3 sm:px-4 md:ml-[112px] md:px-6 mt-6 sm:mt-8 md:mt-10 flex flex-col gap-6 md:gap-10">
        {/* TOP ROW */}
        <div className="font-barlow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* TITLE */}
          <div className="flex flex-col">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
              Chef Kitchen
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              {dateToday}
            </p>
          </div>

          {/* SEARCH + CART */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            <div className="flex items-center bg-[#2D303E] border border-[#393C49] rounded-lg h-10 sm:h-11 w-full sm:w-auto">
              <Search className="ml-3 w-4 sm:w-5 text-white shrink-0" />
              <input
                className="bg-[#2D303E] outline-none ml-2 mr-3 w-full sm:w-56 md:w-52 text-white text-sm placeholder-gray-400"
                type="search"
                placeholder="Search for food, coffee..."
              />
            </div>

            {!isCartOpen && (
              <button onClick={onCartOpen} className="shrink-0">
                <ShoppingCartIcon
                  className="bg-orange-500 hover:bg-orange-600 text-white
                  w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-lg transition-all"
                />
              </button>
            )}
          </div>
        </div>

        {/* TABS */}
        <div
          className="flex gap-6 sm:gap-10 md:gap-20 pb-2 border-b
          border-b-slate-500/50 font-semibold text-sm sm:text-base
          overflow-x-auto whitespace-nowrap"
        >
          <NavLink to="/menu/today" className={tabClass}>
            Today Special
          </NavLink>
          <NavLink to="/menu/special" className={tabClass}>
            Our Specials
          </NavLink>
          <NavLink to="/menu/south" className={tabClass}>
            South Indian
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
