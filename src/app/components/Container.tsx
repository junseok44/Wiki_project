import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto lg:px-4">{children}</div>;
};

export default Container;
