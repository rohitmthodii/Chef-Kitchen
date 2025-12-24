import { Trash2, X } from "lucide-react";

const CartDrawer = ({ isOpen, onClose, cart, setCart }) => {
  const sizeLabel = {
    small: "S",
    medium: "M",
    large: "L",
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeItem = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-[425px] md:w-[500px] bg-[#1F1D2B] transition-transform duration-300 px-6 flex flex-col font-barlow
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
  >
      <div className="sticky top-0 bg-[#1F1D2B] z-10 pt-10">
        <div className="flex justify-between items-center font-barlow">
          <h2 className="text-white text-xl font-semibold">Orders #12345</h2>
          <button onClick={onClose}>
            <X className="text-red-500" />
          </button>
        </div>

        <div className="flex flex-row gap-3 mt-5">
          <button className="text-[#F99147] hover:text-white border border-gray-500/50 hover:border-[#EA7C69] px-3 py-1 rounded-lg hover:bg-[#F99147] transition-all">
            Dine In
          </button>
          <button className="text-[#F99147] hover:text-white border border-gray-500/50 hover:border-[#EA7C69] px-3 py-1 rounded-lg hover:bg-[#F99147] transition-all">
            Take Away
          </button>
          <button className="text-[#F99147] hover:text-white border border-gray-500/50 hover:border-[#EA7C69] px-3 py-1 rounded-lg hover:bg-[#F99147] transition-all">
            Delivery
          </button>
        </div>

        {/* HEADER */}
        <div className="flex flex-row justify-between text-white font-semibold mt-5 pb-5 border-b border-gray-500/50 text-lg">
          <p>Item</p>
          <div className="flex flex-row gap-10 md:gap-[74px]">
            <p className="text-center">Qty</p>
            <p className="text-right pr-2">Price</p>
          </div>
        </div>
      </div>

      {/* CART ITEMS */}
      <div className="flex-1 overflow-y-auto space-y-8 text-white mt-5 mb-5">
        {cart.length === 0 ? (
          <p className="text-gray-400 font-medium">Cart is empty</p>
        ) : (
          cart.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div
                key={`${item.id}-${item.size}`}
                className="flex flex-col space-y-4">
                <div className="grid grid-cols-[1fr_90px_90px] items-center">
                  {/* ITEM */}
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded"
                    />

                    <div className="flex flex-col gap-1">
                      <p className="font-medium max-w-32 md:max-w-48 truncate">
                        {item.name}
                      </p>
                      <div className="flex gap-2 text-sm">
                        <p className="text-gray-400">
                          {sizeLabel[item.size]}
                        </p>
                        <p className="text-gray-400 ml-1">
                          $ {item.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* QTY */}
                  <div className="flex ml-12">
                    <p className="bg-[#2D303E] px-6 py-3 rounded-lg border border-[#393C49]">
                      {item.quantity}
                    </p>
                  </div>

                  {/* PRICE */}
                  <p className="text-right font-semibold pr-2">
                    $ {itemTotal}
                  </p>
                </div>

                <div className="flex flex-row">
                  <input
                    className="w-[300px] md:w-[348px] h-14 rounded-xl pl-5 bg-[#2D303E] text-white placeholder-gray-400 outline-none border border-[#393C49]"
                    type="text"
                    placeholder="Please, just a little bit spicy only."/>

                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-red-500 hover:text-red-600 px-5 py-3 bg-[#2D303E] rounded-xl ml-[19px] md:ml-[46px]">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* FIXED TOTAL */}
      {cart.length > 0 && (
        <div className="flex flex-col gap-5 sticky bottom-0 bg-[#1F1D2B] border-t border-gray-600 pt-4 pb-6 text-white font-barlow">
          <div className="flex justify-between font-thin">
            <p className="font-medium">Discount</p>
            <p>5%</p>
          </div>
          <div className="flex justify-between font-thin">
             <p className="font-medium">Sub total</p>
            <p>$ {totalAmount}</p>
          </div>
          <div className="flex mx-auto bg-[#F99147] px-44 py-2 rounded-lg font-medium hover:bg-[#f77b22] transition-all">
            <p>Order Now</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
