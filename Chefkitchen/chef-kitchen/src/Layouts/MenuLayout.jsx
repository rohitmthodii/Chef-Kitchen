import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import CartDrawer from "../Components/CartDrawer";
import { useState } from "react";
import Receipt from "../Components/Receipt";

const MenuLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDateTime, setOrderDateTime] = useState(null);
  const [orderType, setOrderType] = useState("Dine In");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen overflow-hidden bg-[#1F1D2B]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div
        className={`flex flex-col flex-1 transition-[margin] duration-300 ${
          isCartOpen ? "mr-[435px]" : "mr-0"
        }`}
      >
        {/* Header */}
        <Header
          isCartOpen={isCartOpen}
          onCartOpen={() => setIsCartOpen(true)}
          cart={cart}
          orderType={orderType}
          setOrderType={setOrderType}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Pages */}
        <div className="flex-1 p-4 overflow-auto bg-black md:bg-[#252836]">
          <Outlet context={{ cart, setCart, searchQuery }} />
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
        orderType={orderType}
        setOrderType={setOrderType}
        onOrderNow={() => {
          setOrderDateTime(new Date());
          setShowReceipt(true);
        }}
      />

      <Receipt
        isOpen={showReceipt}
        onClose={() => setShowReceipt(false)}
        cart={cart}
        orderDateTime={orderDateTime}
        orderType={orderType}
      />
    </div>
  );
};

export default MenuLayout;
