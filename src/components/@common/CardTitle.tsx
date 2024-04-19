import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HyperLinkText } from "./Text";

const CardTitle = ({
  icon,
  children,
}: {
  icon: IconProp;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center mb-4 gap-2 text-white">
      <FontAwesomeIcon icon={faBook} />
      {children}
    </div>
  );
};

const CardTitleText = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xl text-white">{children}</h2>;
};

CardTitle.Text = CardTitleText;

export default CardTitle;
