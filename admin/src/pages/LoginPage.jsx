import { SignIn } from "@clerk/clerk-react";
import React from "react";

function LoginPage() {
  return (
    <div>
      Login
      <SignIn />
    </div>
  );
}

export default LoginPage;
