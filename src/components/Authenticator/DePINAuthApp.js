// src/components/DePINAuthApp.js
import React, { useState } from "react";
import SignInPage from "./Authenticator/SignInPage";
import RegisterPage from "./Authenticator/RegisterPage";

const DePINAuthApp = () => {
  // Changed default to "register" so register page shows first
  const [currentPage, setCurrentPage] = useState("register");

  return (
    <div>
      {currentPage === "register" ? (
        <RegisterPage onNavigateToSignIn={() => setCurrentPage("signin")} />
      ) : (
        <SignInPage onNavigateToRegister={() => setCurrentPage("register")} />
      )}
    </div>
  );
};

export default DePINAuthApp;
