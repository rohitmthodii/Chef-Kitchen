import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import CartDrawer from "../Components/CartDrawer";
import { useState } from "react";

const MenuLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // ✅ cart state lives here

  return (
    <div className="flex h-screen overflow-hidden bg-[#1F1D2B]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div
        className={`flex flex-col flex-1 transition-[margin] duration-300
        ${isCartOpen ? "mr-[435px]" : "mr-0"}`}
      >
        {/* Header */}
        <Header
          isCartOpen={isCartOpen}
          onCartOpen={() => setIsCartOpen(true)}
        />

        {/* Pages (TodaySpecial, etc.) */}
        <div className="flex-1 p-4 overflow-auto bg-[#252836]">
          <Outlet context={{ cart, setCart }} /> {/* ✅ SHARE CART */}
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart} // ✅ PASS CART
      />
    </div>
  );
};

export default MenuLayout;
