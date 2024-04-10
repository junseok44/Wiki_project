import { cn } from "@/app/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderBtn = ({ text, icon }: { text: string; icon: IconProp }) => {
  return (
    <a
      className={cn(
        "flex items-center justify-center px-menu_item_gutter cursor-pointer hover:bg-opacity-50, rounded-sm px-3",
        "hover:bg-nav_bar_hover_color",
        "transition-colors duration-300 ease-in-out"
      )}
    >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <h4 className="font-semibold ml-3.5">{text}</h4>
    </a>
  );
};

export default HeaderBtn;
