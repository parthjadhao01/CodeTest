"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Herosection;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var image_1 = require("next/image");
function Herosection() {
    return (<div>
      <div className="flex justify-center items-center mt-[100px]">
        <image_1.default src={"/hero-1.jpeg"} width={250} height={250} alt={"Hero image"}/>
      </div>
      <div className="mt-9 mx-[200px] flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">
            Practice DSA. Track Progress. Get Better Every Day.
          </h1>
          <p className="text-lg">
            A personal coding platform to solve data structures and algorithms
            problems, compete in contests, and build consistency while learning.
          </p>
        </div>
        <div className="flex">
          <button_1.Button className="mt-5 my-5 mr-3" size="lg" variant={"outline"}>
            Start Solving Problems
          </button_1.Button>
          <button_1.Button className="mt-5 my-5 " size="lg" variant={"default"}>
            Participate in Contest
          </button_1.Button>
        </div>
      </div>
    </div>);
}
