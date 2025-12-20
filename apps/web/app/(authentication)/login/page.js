"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginPage;
var login_form_1 = require("@/components/login-form");
function LoginPage() {
    return (<div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <login_form_1.LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img src="/_%20(1).jpeg" alt="Image" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"/>
      </div>
    </div>);
}
