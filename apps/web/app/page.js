"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var navbar_1 = require("@/features/landing/components/navbar");
var herosection_1 = require("@/features/landing/components/herosection");
function Home() {
    return (<div className=" h-full mx-24">
      <navbar_1.default />
      <herosection_1.default />
    </div>);
}
