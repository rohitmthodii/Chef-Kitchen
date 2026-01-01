import { X } from "lucide-react";

const ReceiptPopup = ({ isOpen, onClose, cart }) => {
  if (!isOpen) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center">
      <div className="bg-[#1F1D2B] w-[90%] max-w-md rounded-xl p-6 text-white relative">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4">Receipt</h2>

        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between text-sm"
            >
              <p>
                {item.name} ({item.size}) × {item.quantity}
              </p>
              <p>$ {item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-4 pt-4 flex justify-between font-semibold">
          <p>Total</p>
          <p>$ {total}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-[#F99147] py-2 rounded-lg hover:bg-[#f77b22]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiptPopup;
