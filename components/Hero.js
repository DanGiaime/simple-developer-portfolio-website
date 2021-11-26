import React, { useEffect } from "react";

import CoolFacts from "./CoolFacts";
import StreamOrFace from "./StreamOrFace";
export default function Hero() {


  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <CoolFacts />
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <StreamOrFace />
          {/* <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <p className="font-mono">That's me</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* twitch */}
    </div>
  );
}
