"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContestPage;
var react_1 = require("react");
var navbar_1 = require("@/features/landing/components/navbar");
var image_1 = require("next/image");
function ContestPage() {
    return (<div>
      <div className="mx-24">
        <navbar_1.default />
      </div>
      <div className="mt-5 h-[350px] w-full bg-black text-white flex flex-col justify-center items-center">
        <image_1.default src="/gold.jpeg" alt="gold" width={256} height={356}/>
        <h1 className="text-4xl">CodeManic Contest</h1>
        <p>Contest every week. Compete and see your ranking </p>
      </div>
    </div>);
}
