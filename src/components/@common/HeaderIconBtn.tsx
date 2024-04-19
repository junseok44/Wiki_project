import { cn } from "@/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderIconBtn = ({
  icon,
  bgColor,
  hoverColor,
}: {
  icon: IconProp;
  bgColor?: string;
  hoverColor?: string;
}) => {
  return (
    <button
      className={cn(
        "w-rectangle_button_width flex items-center justify-center rounded-small font-extrabold",
        `bg-${bgColor || "transparent"}`,
        `hover:bg-${hoverColor || "transparent"}`,
        `transition-colors duration-300 ease-in-out`
      )}
    >
      <FontAwesomeIcon icon={icon} />
      {/* <i className={cn(`${iconClass} fa-sm`)}></i> */}
    </button>
  );
};

export default HeaderIconBtn;
