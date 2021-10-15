import React, { useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
// import ReactTwitchEmbedVideo from ""

import dynamic from "next/dynamic";
const ReactTwitchEmbedVideo = dynamic(() => import("react-twitch-embed-video"), {
  ssr: false,
});

// see if response from https://twitchlive.nyx.xyz/roxkstar74 is true
const checkIsLive = async () => {
    let output = await fetch("https://twitchlive.nyx.xyz/roxkstar74")
      .then((response) => response.text());
    console.log(typeof output);
    return output
}

export default function Hero() {
  const [isLive, setIsLive] = React.useState(false);
  useEffect(() => {
    checkIsLive().then((res) => {
      setIsLive(res === "true");
    });
  }, []);


  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Very Attractive.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Big Brain.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Streamer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          {
          isLive
          ? <ReactTwitchEmbedVideo height='405px' width='720px' muted layout="video" channel="roxkstar74" />
          : <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          }
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
