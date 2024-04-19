import React from "react";
import { HyperLinkText } from "./Text";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md border-1 border-card_border_color bg-card_content_color">
      {children}
    </div>
  );
};

const CardListItem = ({ time, title }: { time: string; title: string }) => {
  return (
    <li className="flex items-center mb-1">
      <div className="flex-1">
        <HyperLinkText href={"dfdf"}>{title}</HyperLinkText>
      </div>
      <span className="text-xs text-white">{time}</span>
    </li>
  );
};

Card.ListItem = CardListItem;

export default Card;
