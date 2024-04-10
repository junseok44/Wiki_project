import React from "react";

const MainContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md border-1 border-card_border_color bg-card_content_color p-4">
      {children}
    </div>
  );
};

export default MainContentBox;
