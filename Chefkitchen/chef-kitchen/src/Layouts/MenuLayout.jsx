  import { Outlet } from "react-router-dom";
  import Sidebar from "../Components/Sidebar";
  import Header from "../Components/Header";
  import { useState } from "react";
  import CartDrawer from "../Components/CartDrawer";


  const MenuLayout = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
      <div className="flex h-screen overflow-hidden bg-[#1F1D2B]">

        {/* Sidebar */}
        <Sidebar />

        {/* Right Side */}
        <div className={`flex flex-col flex-1 transition-[margin] duration-300
          ${isCartOpen ? "mr-[500px]" : "mr-0"}`}>

          {/* Header */}
            <Header isCartOpen={isCartOpen} onCartOpen={() => setIsCartOpen(true)}/>

          {/* Dynamic Content */}
          <div className="flex-1 p-4 overflow-auto bg-[#252836]">
            <Outlet />
          </div>
        </div>

        {/* CART DRAWER */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    );
  };

  export default MenuLayout;
