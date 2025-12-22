import { X } from "lucide-react";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full md:w-[500px] w-full sm:w-full
      bg-[#1F1D2B] border-l border-[#393C49]
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-4 h-20 border-b border-[#393C49]">
        <h2 className="text-white text-lg font-semibold">
          Your Cart
        </h2>

        <button onClick={onClose}>
          <X className="text-red-500 w-6 h-6" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-1 p-4 text-white">
        Cart items here
      </div>
    </div>
  );
};

export default CartDrawer;
