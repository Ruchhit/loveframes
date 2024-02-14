import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import photo1 from "../images/P1761546.jpg";
import photo2 from "../images/P1761179.jpg"
 
const Body = () => { 
        const ref = useRef();
        useEffect(() => {
            const el = ref.current;
            gsap.to(el,{
                ease : "power2.inOut",
                width : "100%",
                duration : 2 ,
                stagger : 2,
            })
        }, [])
    
  return (
    <div className="w-full h-full">
      <div className="max-w-screen-lg h-screen mx-auto bg-gray-400">
        <div className="w-full h-96 relative">
          <div className="absolute z-10 w-1/3 h-full right-0 flex justify-center items-center text-5xl font-serif text-white font-bold ">Wedding</div>
          <img
            src={photo1}
            ref={ref}
            alt="p1"
            className="img aspect-auto overflow-hidden h-full w-full object-cover absolute  "
          />
          <img
            src={photo2}
            alt="p2"
            className="img aspect-auto overflow-hidden h-full w-full object-cover absolute  "
          />
          <img
            src={photo1}
            alt="p1"
            className="img aspect-auto overflow-hidden h-full w-full object-cover absolute  "
          />
        </div>
        <div className="w-full h-96 ">Fashion</div>
        <div className="w-full h-96">Pre-Wedding</div>
      </div>
    </div>
  );
};

export default Body;
