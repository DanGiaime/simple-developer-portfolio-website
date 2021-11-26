import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

export default function CoolFacts() {
  return (<div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
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
</div>);
}