import React from 'react'

const Kits = ({details}) => {
    
  return (
    <div className="font-redhat max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-10"> 
            {details?.map(({kitName, price, image}, idx) => (
            <div className="text-center" key={idx}> 
                <img src={image} alt="" className="w-full" />
                <h1 className="text-2xl font-semibold"> {kitName} </h1>
                <span className="text-xl font-bold my-4 block">N{price} </span>
                <div className="flex items-center gap-2 flex-col md:flex-row justify-center"> 
                    <button className="btn btn-secondary text-white mr-3"> 
                    
                <img src="/Buy.png" alt="" className="w-4 h-4 mr-2" />
                    Buy Now </button>
                    <button className="btn btn-outline btn-secondary hover:bg-white text-white hover:text-white"> 
                <img src="/heart.png" alt="" className="w-5 h-5 mr-2" />
                    
                    Add to Wishlist </button>
                </div>
            </div>
            ))}
        
        </div>
    </div>
  )
}

export default Kits