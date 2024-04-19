import React from "react";
import { HyperLinkText } from "../@common/Text";
import { cn } from "@/lib/utils";

const ListItem = ({
  index,
  contents,
  level,
}: {
  index: string;
  contents: string;
  level: number;
}) => {
  return (
    <li
      className={`flex items-center pl-[var(--customPaddingLeft)]`}
      style={{
        ["--customPaddingLeft" as any]: `${(level - 1) * 10}px`,
      }}
      id={"s-" + index}
    >
      <HyperLinkText href={"#a-" + index}>{index}</HyperLinkText>
      <span className="text-white text-content_size">.</span>
      <span
        className="text-white text-content_size ml-0.5"
        dangerouslySetInnerHTML={{
          __html: contents,
        }}
      ></span>
    </li>
  );
};

const TableOfContents = ({
  list,
}: {
  list: { index: string; contents: string; level: number }[];
}) => {
  return (
    <div
      className="border-card_border_color border-0.5 inline-block pt-[12px] pr-[20px] pb-[18px] "
      id={"table_of_contents"}
    >
      <div className="text-font_color text-lg font-bold ml-3.5">목차</div>
      <ul className=" text-white pl-contents_padding mt-2">
        {list.map((item) => (
          <ListItem
            key={item.index}
            index={item.index}
            contents={item.contents}
            level={item.level}
          />
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
