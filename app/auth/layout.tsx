import React from "react";

const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <nav className="bg-red-500 text-white">
        This is auth Navbar without /nav prefox
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
