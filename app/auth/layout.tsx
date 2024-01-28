import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800 flex items-center justify-center bg-sky-500">
      {children}
    </div>
  );
};

export default AuthLayout;
