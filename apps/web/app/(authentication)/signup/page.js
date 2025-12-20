"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupPage;
var signup_form_1 = require("@/components/signup-form");
var react_1 = require("react");
function SignupPage() {
    return (<div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <signup_form_1.SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img src="/_.jpeg" alt="Image" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"/>
      </div>
    </div>);
}
