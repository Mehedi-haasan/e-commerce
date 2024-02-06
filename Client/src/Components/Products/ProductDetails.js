import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";



const PracriceDetailsCard = () => {

  const [data, setData] = useState([])
  const [attributes, setAttribute] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState()

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8050/api/get/product/variant/1`)
    const data = await response.json();
    setData(data.items)
    setAttribute(data.attribute)
    setSelectedVariant(data.items[0])
    setLoading(true)
  }

  useEffect(() => {
    fetchData();
  }, [])

  let rating = [1, 2, 3, 4, 5]
  let rat = 3
  return (
    <div className='pt-6 lg:pt-20 bg-white'>
      {
        loading ? <div>
          <div className='grid grid-cols-12 mx-auto gap-2 lg:gap-4 w-full md:w-[80%] lg:w-[65%]'>
            <div className='grid col-span-12 md:col-span-6 w-full mx-auto p-3 rounded-lg '>
              <div className='overflow-hidden'>
                <img src={selectedVariant.image_url} alt='image2' className='w-full mx-auto p-1 h-72 lg:h-96 rounded-lg transition-all duration-1000' />
              </div>
            </div>


            <div className='grid col-span-12 md:col-span-6 mx-auto w-full p-2 rounded-lg'>
              <div>
                <h1 className='text-xl font-bold text-red-500'>{selectedVariant.name}</h1>
                <div className="flex my-1.5">
                  {rating.map((rate) => (
                    <Icon icon="iwwa:star-o" width="18px" className={`mr-1 mt-1 ${rate <= rat ? "text-[#FFA500]" : ""}`} />
                  ))}

                </div>
                <h2 className='text-md font-semibold flex'>Price: <span className='text-red-500 px-1'>{selectedVariant.price}</span> $</h2>
                <div className='py-1'>
                  {
                    attributes.map((data) => (
                      <div className='my-3'>
                        <h1 className='font-semibold py-[2px]'>{data.name}</h1>
                        <form className='flex'>
                          {data.value.map((val) => (
                            <div className='pr-2 flex'><input name={data.name} type='radio' /><span className='pl-1'>{val}</span></div>
                          ))}
                        </form>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>

          <div className='w-full md:w-[80%] lg:w-[65%] mx-auto  py-10'>
            <div className='p-4 rounded-lg  border'>
              <h1 className='font-semibold text-xl'>Description</h1>
              <ul>
                <li>New exclusive content every week</li>
                <li>New original film every month</li>
                <li>Internationally acclaimed dubbed content</li>
                <li>High-end power-packed original series</li>
                <li>Ad-Free Content</li>
                <li>New exclusive content every week</li>
              </ul>
            </div>


            <div className='grid grid-cols-12 gap-4'>
              <div className='grid col-span-12 p-4 mt-4 h-96 rounded-lg shadow-lg border'>
                <h1 className='text-xl font-semibold'>Customer Reviews</h1>
                <h1 className='text-center text-5xl font-bold'>{5}</h1>
                <div className="flex mx-auto w-28">
                  <Icon icon="solar:star-bold" width="18px" className="mr-1 mt-1 text-[#FFA500]" />
                  <Icon icon="solar:star-bold" width="18px" className="mt-1 text-[#FFA500]" />
                  <Icon icon="solar:star-bold" width="18px" className="mx-1 mt-1 text-[#FFA500]" />
                  <Icon icon="solar:star-bold" width="18px" className="mt-1 text-[#FFA500]" />
                  <Icon icon="solar:star-bold" width="18px" className="mx-1 mt-1 text-[#FFA500]" />
                </div>
                <p className='text-center'>{1}Review</p>

                <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]" />
                  <Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" />
                  <p className='border bg-red-600 w-full rounded-full ml-[6px] h-4 mt-1 px-4'></p>{0}
                </div>
                <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]" />
                  <Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" />
                  <p className='border bg-red-500 w-full rounded-full h-4 mt-1 ml-[6px] px-4'></p>{0}
                </div>
                <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" />
                  <p className='border bg-red-400 w-full rounded-full h-4 ml-[6px] mt-1 px-4'></p>{0}
                </div>
                <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="18px" className="mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" />
                  <p className='border bg-red-300 w-full rounded-full h-4 ml-[6px] mt-1 px-4'></p>{0}
                </div>
                <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" /><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]" />
                  <p className='border bg-red-200 w-full rounded-full ml-[6px] h-4 mt-1 px-4'></p>{0}
                </div>
                <h1>{1} REVIEW FOR CHORKI SUBSCRIPTION BD</h1>

              </div>

            </div>



          </div>
        </div> : <h1>Loading...</h1>
      }
    </div>

  )
}

export default PracriceDetailsCard
