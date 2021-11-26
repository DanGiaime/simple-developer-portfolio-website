
import userData from "@constants/data";
import { useState, useEffect } from "react";
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

export default function StreamOrFace() {
    const [isLive, setIsLive] = useState(false);
    useEffect(() => {
      checkIsLive().then((res) => {
        setIsLive(res === "true");
      });
    }, []);

    return (<>
        {isLive
        ? <ReactTwitchEmbedVideo height='405px' width='720px' muted layout="video" channel="roxkstar74" />
        : <img src={userData.avatarUrl} alt="avatar" className=" shadow" />}
    </>  
    );
};