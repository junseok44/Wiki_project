import React from "react";
import { HyperLinkText } from "../@common/Text";

const ArticleBlock = ({
  title,
  children,
  indexId,
}: {
  indexId: string;
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div id={`a-${indexId}`}>
      <div className="font-extrabold text-[1.8rem] text-font_content_color flex items-center mt-[1.2rem] mb-[0.8rem] border-table_border_color border-b-1 pb-[5px]">
        <HyperLinkText href={`#table_of_contents`}>{indexId}</HyperLinkText>
        <h2 className="article__header text-bold">. {title}</h2>
      </div>
      <p className="article__content text-font_content_color">{children}</p>
    </div>
  );
};

export default ArticleBlock;
