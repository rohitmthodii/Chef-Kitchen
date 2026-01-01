import { Search, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = ({ isCartOpen, onCartOpen, cart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ default active tab = Today Special
  const [activeTab, setActiveTab] = useState("today");

  const tabClass = (tabName) =>
    activeTab === tabName ? "text-orange-500" : "text-white";

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

  // ✅ TOTAL CART QUANTITY
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // ✅ Navigate to /menu/today on initial render if not already there
  useEffect(() => {
    if (location.pathname !== "/menu/today") {
      setActiveTab("today"); // highlight Today Special
      navigate("/menu/today", { replace: true }); // navigate to Today Special page
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only on first mount

  return (
    <div className="bg-[#252836]">
      <div className="px-3 sm:px-4 md:ml-[112px] md:px-6 mt-6 sm:mt-8 md:mt-10 flex flex-col gap-6 md:gap-6">

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
              <button
                onClick={onCartOpen}
                className="relative shrink-0"
              >
                <ShoppingCartIcon
                  className="bg-orange-500 hover:bg-orange-600 text-white
                  w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-lg transition-all"
                />

                {/* CART COUNT BADGE */}
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-red-600 text-white
                    text-[10px] w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

        {/* TABS */}
        <div
          className="flex gap-6 sm:gap-10 md:gap-20 pb-2 border-b
          border-b-slate-500/50 font-semibold text-sm sm:text-base
          overflow-x-auto whitespace-nowrap">
          <NavLink to='/menu/today'>
            <button onClick={() => setActiveTab("today")} className={tabClass("today")}>
              Today Special
            </button>
          </NavLink>
          <NavLink to='/menu/our'>
            <button onClick={() => setActiveTab("special")} className={tabClass("special")}>
              Our Specials
            </button>
          </NavLink>
          <NavLink to='/menu/south'>
            <button onClick={() => setActiveTab("south")} className={tabClass("south")}>
              South Indian
            </button>
          </NavLink>
        </div>

        <div className="flex justify-between items-center py-2">
          <p className="text-white text-xl">Choose Dishes</p>

          <div className="w-32">
      <select name="" id="" className="w-full bg-[#1F1D2B] text-white px-4 py-2 rounded-lg border border-gray-600 outline-none">
        <option value="option1">Dine In</option>
        <option value="option2">Take Sway</option>
        <option value="option3">Delivery</option>
      </select>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
