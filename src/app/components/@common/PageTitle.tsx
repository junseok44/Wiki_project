import React from "react";

// font-size: 2.5rem;
// font-weight: 500;
// margin-bottom: 0.8rem;
// padding-bottom: 5px;
// color: var(--color-font-content);

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div
      className="
        leading-none
        text-[2.5rem]
        font-semibold
        text-[#e0e0e0]
    "
    >
      {title}
    </div>
  );
};

export default PageTitle;
