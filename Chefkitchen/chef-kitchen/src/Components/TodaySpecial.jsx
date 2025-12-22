import React, { useState } from 'react'
import { menuData } from '../Constants'

const TodaySpecial = () => {

    const [selectedSizes, setSelectedSizes] = useState({});

    const handleSizeChange = (id, size) => {
        setSelectedSizes(prev => ({
            ...prev,
            [id]: size
        }));
    };

  return (
    <div className='md:ml-[112px] px-2 font-barlow pb-8'>
      <div className=' flex flex-row items-center justify-between'>
        <p className='text-xl sm:text-xl md:text-2xl text-white'>Choose Dishes</p>

        <div className='bg-[#1F1D2B] flex items-center px-3 py-2 sm:py-2 md:py-3 border border-[#393C49] rounded-lg text-white'>
            <select className='bg-[#1F1D2B] outline-none' name="" id="">
                <option value="">Dine In</option>
                <option value="">Take Away</option>
                <option value="">Delivery</option>
            </select>
        </div>
      </div>

      {/* GRID */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10'>
            {menuData.map((item) => {
                const currentSize = selectedSizes[item.id] || 'small';
                const price = item.Prices[currentSize];

                return(
                    <div key={item.id} className='bg-[#1F1D2B] flex flex-col items-center px-2 sm:px-2 md:px-4 md:py-6 rounded-xl mt-20 relative pb-8'>
                        <img className='w-28 sm:w-28 md:w-32 absolute -top-16' src={item.image} alt="" />

                        <p className='mt-14 text-white flex text-center font-medium'>{item.name}</p>

                        <div className='mt-0 sm:mt-0 md:mt-2 flex gap-4'>
                            {price.old && (
                                <span className='line-through text-red-500 mr-2'>$ {price.old}</span>
                            )}
                            <span className='text-green-500'>$ {price.new}</span>
                        </div>

                        <p className='text-gray-500 font-medium mt-0 sm:mt-0 md:mt-1'>{item.bowlsLeft}</p>

                        <div className='flex mt-1 sm:mt-1 md:mt-3 space-x-2'>
                            {['small', 'medium', 'large'].map((size) => (
                                <button key={size} className={`px-3 py-1 rounded ${
                                    currentSize === size ? 'bg-[#F99147] text-white' : 'text-white'
                                }`} onClick={() => handleSizeChange(item.id, size)}>{size.charAt(0).toUpperCase()}</button>
                            ))}
                        </div>

                        <button className='text-white bg-[#F99147] hover:bg-[#f37c27] transition-all px-5 py-2 sm:px-5 md:px-10 font-medium mt-2 sm:mt-2 md:mt-3 rounded-lg'>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TodaySpecial
