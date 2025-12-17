import React from "react";

export default function Hero(){
    return(
        <div className="flex flex-col items-center justify-center w-full px-4">

        <div className="flex flex-col w-2/3 md:w-2/3 text-center text-4xl md:text-8xl pt-8 md:pt-16 pb-8 md:pb-16">
            <h1 className="flex justify-between w-full">
                <span>ABOUT</span>
                <span>THE</span>
            </h1>
            <h1 className="text-center">PHOTOGRAPHER</h1>
        </div>
<p className="w-full md:w-1/3 text-justify px-4 md:px-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit
     in voluptate velit esse cillum dolore eu fugiat nulla 
     pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est 
      laborum.
</p>
      
        </div>
    )
}