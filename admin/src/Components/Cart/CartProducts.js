

const CartProducts = ({id,image,heading,colour,size,price,category,count,total,name,email,password}) => {
    
      // console.log(count)
    const handleDelete =()=>{
      fetch(`http://localhost:5000/delete/cart/${id}`, {
           method: 'DELETE',
         });
    }

  return (
    <div className='bg-[#F3F4F6]'>
        <div className="hidden md:block">
            <div className='grid grid-cols-12 w-full mx-auto bg-white py-2 border-b'>
              
                  <div className='grid col-span-5 '>   

                    <div className="flex"> 
                      { image && <img src={image} alt='image2' className='w-20 h-20 ml-4'/>}
                      <div>
                      <h1 className="ml-2  pr-2 text-md font-semibold">{heading}</h1>
                      {
                        category !== "Game" && <div> {image && <h1 className="ml-2 text-xs">Select colour: <span className="text-xs font-semibold">{colour}</span></h1>} </div>
                      }
                      </div>

                    </div>

                  </div>

                  <div className='grid col-span-7 py-1'>
                  <div className='grid grid-cols-12 font-semibold'>
                      
                      <div className='grid col-span-3 text-sm'>{ price && <h1>{price}$</h1>}</div>

                      <div className='grid col-span-3'>
                        <div className='flex'>
                          {
                            category === "Game" ? <h1>{size} UC</h1> : <h1>{count}</h1>
                          }
                        </div>
                      </div>
                      <div className='grid col-span-3 text-sm'>{price && <h1 className='ml-1'>{price*count}$</h1>}</div>
                      <div className='grid col-span-3'>
                      
                          {/* // image && <Icon onClick={handleDelete} icon="ic:baseline-delete" width="22px" className="cursor-pointer ml-5"/> */}
                          <div><button onClick={handleDelete} className="px-2 border rounded-md">Delete</button></div>
                        
                        </div>
                    </div>

                  </div>
                  
                </div>
            </div>
        </div>
    
  )
}

export default CartProducts


