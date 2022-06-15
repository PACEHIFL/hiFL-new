import React from 'react'
import Image from "next/image"

// import image from "/jersey.png"

const Awaredees = ({data: {name, award, year, team}}) => {
    return (
        <div className='grid grid-cols-3 font-redhat mb-6 gap-2'>
            <div className="col-span-3 xl:col-span-2 flex flex-col md:flex-row bg-[url('/gallery-bg.png')] items-center bg-cover bg-no-repeat">
                <div className='flex-1 justify-center text-white text-xl md:pl-10 pb-5 text-center md:text-left pt-10 md:pt-0'>
                    <h1 className='text-2xl md:text-3xl text-warning font-bold mb-3 flex items-center justify-center md:justify-start '> <img src="/user-circle.png" alt="" className="h-6 hidden md:inline-flex w-6 mr-4" /> {name} </h1>
                    <h1 className="flex items-center  justify-center md:justify-start md:mb-3"> <img src="/elite-award.png" alt="" className="h-6 hidden md:inline-flex w-6 mr-4" />  {award} </h1>
                    <h1 className="flex items-center justify-center md:justify-start  md:mb-3"> <img src="/calendar.png" alt="" className="h-6 hidden md:inline-flex w-6 mr-4" />{year}</h1>
                    <h1 className="flex items-center  justify-center md:justify-start md:mb-3"> <img src="/profile-user.png" alt="" className="h-6 hidden md:inline-flex w-6 mr-4" /> {team}</h1>
                </div>
                <div className=''>
                    <img src="/jersey.png" alt="" className='w-full mr-10 h-full' />
                    {/* <Image alt="image" width={100} height={100} src={`/jersey.png`} layout="responsive" /> */}
                </div>
            </div>
            <div className="col-span-3 col xl:col-span-1 p-10 bg-[#F9F9F9]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni sapiente atque dolorem esse. Quam suscipit expedita dicta alias voluptatibus commodi nihil nulla facilis esse? Aut, assumenda. Laboriosam, aliquam laudantium?</p>
            </div>
        </div>
    )
}

export default Awaredees