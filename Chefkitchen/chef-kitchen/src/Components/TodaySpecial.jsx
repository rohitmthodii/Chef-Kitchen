// import React, { useState } from "react";
// import { menuData } from "../Constants";
// import { useOutletContext } from "react-router-dom";

// const TodaySpecial = () => {
//   const { cart, setCart } = useOutletContext(); // ✅ shared cart
//   const [selectedSizes, setSelectedSizes] = useState([]);

//   const handleSizeChange = (id, size) => {
//     setSelectedSizes((prev) => {
//       const exists = prev.find((item) => item.id === id);
//       if (exists) {
//         return prev.map((item) => (item.id === id ? { ...item, size } : item));
//       }
//       return [...prev, { id, size }];
//     });
//   };

//   const addToCart = (id) => {
//     const item = menuData.find((i) => i.id === id);
//     if (!item) return;

//     const selected = selectedSizes.find((s) => s.id === id);
//     const size = selected?.size || "small";

//     const price = item.Prices[size]?.new;
//     if (!price) return;

//     setCart((prev) => {
//       const index = prev.findIndex((c) => c.id === id && c.size === size);

//       if (index !== -1) {
//         return prev.map((c, i) =>
//           i === index ? { ...c, quantity: c.quantity + 1 } : c
//         );
//       }

//       return [
//         ...prev,
//         {
//           id,
//           name: item.name,
//           size,
//           price,
//           image: item.image,
//           quantity: 1,
//         },
//       ];
//     });
//   };

//   return (
//     <div className="md:ml-[112px] px-2 font-barlow pb-8">
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
//         {menuData.map((item) => {
//           const currentSize =
//             selectedSizes.find((s) => s.id === item.id)?.size || "small";

//           const price = item.Prices[currentSize];

//           return (
//             <div
//               key={item.id}
//               className="bg-[#1F1D2B] rounded-xl mt-20 p-4 text-center"
//             >
//               <img src={item.image} alt="" className="w-32 mx-auto -mt-20" />

//               <p className="text-white mt-4">{item.name}</p>

//               <div className="mt-2 flex gap-3 items-center justify-center">
//                 {price.old && (
//                   <span className="text-red-500 line-through">
//                     $ {price.old}
//                   </span>
//                 )}
//                 <span className="text-green-500">
//                   $ {price.new}
//                 </span>
//               </div>

//               <div className="flex justify-center gap-2 mt-3">
//                 {["small", "medium", "large"].map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => handleSizeChange(item.id, size)}
//                     className={`px-3 py-1 rounded ${
//                       currentSize === size
//                         ? "bg-[#F99147] text-white"
//                         : "text-white"
//                     }`}
//                   >
//                     {size[0].toUpperCase()}
//                   </button>
//                 ))}
//               </div>

//               <button onClick={() => addToCart(item.id)} className="mt-4 bg-[#F99147] text-white px-6 py-2 rounded-lg">
//                 Add to Cart
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TodaySpecial;





import React, { useState } from "react";
import { menuData } from "../Constants";
import { useOutletContext } from "react-router-dom";

const TodaySpecial = () => {
  const { cart, setCart } = useOutletContext();
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (id, size) => {
    setSelectedSizes((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, size } : item
        );
      }
      return [...prev, { id, size }];
    });
  };

  const addToCart = (id) => {
    const item = menuData.find((i) => i.id === id);
    if (!item) return;

    const selected = selectedSizes.find((s) => s.id === id);
    const size = selected?.size || "small";

    const price = item.Prices[size]?.new;
    if (!price) return;

    setCart((prev) => {
      const index = prev.findIndex(
        (c) => c.id === id && c.size === size
      );

      if (index !== -1) {
        return prev.map((c, i) =>
          i === index ? { ...c, quantity: c.quantity + 1 } : c
        );
      }

      return [
        ...prev,
        {
          id,
          name: item.name,
          size,
          price,
          image: item.image,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="md:ml-[112px] px-2 font-barlow pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {menuData.map((item) => {
          const currentSize =
            selectedSizes.find((s) => s.id === item.id)?.size || "small";

          const price = item.Prices[currentSize];

          // ✅ BUTTON STATE DERIVED FROM CART
          const isAdded = cart.some(
            (c) => c.id === item.id && c.size === currentSize
          );

          return (
            <div
              key={item.id}
              className="bg-[#1F1D2B] rounded-xl mt-20 p-4 text-center"
            >
              <img src={item.image} alt="" className="w-32 mx-auto -mt-20" />

              <p className="text-white mt-4">{item.name}</p>

              <div className="mt-2 flex gap-3 items-center justify-center">
                {price.old && (
                  <span className="text-red-500 line-through">
                    $ {price.old}
                  </span>
                )}
                <span className="text-green-500">
                  $ {price.new}
                </span>
              </div>

              <div className="flex justify-center gap-2 mt-3">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(item.id, size)}
                    className={`px-3 py-1 rounded ${
                      currentSize === size
                        ? "bg-[#F99147] text-white"
                        : "text-white"
                    }`}
                  >
                    {size[0].toUpperCase()}
                  </button>
                ))}
              </div>

              {/* ✅ AUTO-RESETTING BUTTON */}
              <button
                onClick={() => addToCart(item.id)}
                className={`mt-4 px-6 py-2 rounded-lg ${
                  isAdded
                    ? "bg-green-600 text-white"
                    : "bg-[#F99147] text-white"
                }`}
              >
                {isAdded ? "✔ Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodaySpecial;
