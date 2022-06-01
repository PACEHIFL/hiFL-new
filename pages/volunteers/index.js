import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import Image from "next/dist/client/image";


const Volunteers = () => {
  return <div>
     <PageTitle name="Volunteers" />
     <div className="mx-16">
       <div className="pb-8  mb-16  border-b-2 border-[#F4C316]">
     <div className="mt-16 mb-10 ">
          <Image src="/leave_your_mark.png" alt="" width="100%" height="40vh" layout="responsive" objectFit="cover" />
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ipsum sed nisi gravida gravida.
           Donec dapibus, tortor eget posuere pretium, lacus nibh lobortis odio, eget elementum turpis nisi in
            purus. In efficitur lorem risus, ut pharetra purus scelerisque a. Nam in mattis lacus. Suspendisse 
            dui leo, posuere id condimentum ac, pellentesque at erat. Pellentesque habitant morbi tristique 
            senectus et netus et malesuada fames ac turpis egestas. Donec sed nulla pulvinar, vestibulum lacus 
            ac, sollicitudin ipsum. Nulla quis sapien diam. 
          Vivamus dictum, est ac interdum fermentum, nunc ipsum egestas arcu, in convallis purus neque ut ipsum.
           </p>
           </div>
           {/* <hr className="pb-8 mx-4 mb-16  border-b-2 border-[#F4C316]"/> */}
           
           <div className="flex justify-between align-top border-b-2 border-b-[#F4C316] mb-16 pb-16   ">
           <div className="w-[48%] ">
             {/* <Image src="/volunteer-certificate.png" alt="" width="100%" height="75vh" layout="responsive" objectFit="cover" /> 
             */}
              <img src="/volunteer-application.png" className="h-[100%] w-[100%]" alt=""/>
             </div>
             <div className="flex flex-col w-1/2 mt-0 align-top justify-start  ">
            
               <h1 className="text-2xl mb-2 font-bold w-4/5 text mt-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
               <p> Donec dapibus, tortor eget posuere pretium, lacus nibh lobortis odio, eget elementum turpis nisi
                  in purus. In efficitur lorem risus, ut pharetra purus scelerisque a. 
                 Nam in mattis lacus. Suspendisse dui leo, posuere id condimentum ac, pellentesque at erat. </p>
             </div>
           </div>
         
           <div className="flex justify-between align-top border-b-2 border-b-[#F4C316] mb-16 pb-16 ">
             <div className="flex flex-col align-top justify-between  w-[48%]">
             <p >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ipsum sed nisi gravida gravida.
              Donec dapibus, tortor eget posuere pretium, lacus nibh lobortis odio, eget elementum turpis nisi in 
              purus. In efficitur lorem risus, ut pharetra purus scelerisque a. Nam in mattis lacus. Suspendisse
               dui leo, posuere id condimentum ac, pellentesque at erat. Pellentesque habitant morbi tristique 
               senectus et netus et malesuada fames ac turpis egestas. Donec sed nulla pulvinar, vestibulum lacu
                ac, sollicitudin ipsum. Nulla quis sapien diam.
              Vivamus dictum, est ac interdum fermentum, nunc ipsum egestas arcu, in convallis purus neque ut ipsum.
             </p>
             <button className="bg-black text-white w-1/2 h-16" >bbbb</button>
             </div>
             <div className="w-[48%] ">
             {/* <Image src="/volunteer-certificate.png" alt="" width="100%" height="75vh" layout="responsive" objectFit="cover" /> 
             */}
              <img src="/volunteer-certificate.png" className="h-[100%] w-[100%]" alt=""/>
             </div>
           </div>

           <div className="flex justify-between align-top border-b-1 border-b-[#F4C316] mb-16 pb-16 ">
           <div className="w-[48%] ">
             
              <img src="/volunteer-banner.png" className="h-[100%] w-[100%]" alt=""/>
             </div>
             <div className="flex flex-col align-top justify-between  w-[48%]">
             <p >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ipsum sed nisi gravida gravida.
              Donec dapibus, tortor eget posuere pretium, lacus nibh lobortis odio, eget elementum turpis nisi in 
              purus. In efficitur lorem risus, ut pharetra purus scelerisque a. Nam in mattis lacus. Suspendisse
               dui leo, posuere id condimentum ac, pellentesque at erat. Pellentesque habitant morbi tristique 
               senectus et netus et malesuada fames ac turpis egestas. Donec sed nulla pulvinar, vestibulum lacu
                ac, sollicitudin ipsum. Nulla quis sapien diam.
              Vivamus dictum, est ac interdum fermentum, nunc ipsum egestas arcu, in convallis purus neque ut ipsum.
             </p>
             <button className="bg-black text-white w-1/2 h-16">bbbb</button>
             </div>
             
           </div>
        

    </div>
    </div>;
};

export default Volunteers;
