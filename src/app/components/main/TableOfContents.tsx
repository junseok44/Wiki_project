import React from "react";
import { HyperLinkText } from "../@common/Text";

const ListItem = ({
  index,
  contents,
  id,
}: {
  id: string;
  index: string;
  contents: string;
}) => {
  return (
    <li className="flex items-center" id={"s-" + id}>
      <HyperLinkText href={"#a-" + id}>{index}</HyperLinkText>
      <span className="text-white text-content_size">. {contents}</span>
    </li>
  );
};

const TableOfContents = () => {
  return (
    <div
      className="border-card_border_color border-0.5 inline-block pt-[12px] pr-[20px] pb-[18px] "
      id={"table_of_contents"}
    >
      <div className="text-font_color text-lg font-bold ml-3.5">목차</div>
      <ul className=" text-white pl-contents_padding mt-2">
        <ListItem index="1" contents="밴드 역사" id={"1"} />
        <div className="pl-contents_padding">
          <ListItem index="1.1" contents="축구" id={"1.1"} />
          <ListItem index="1.2" contents="야구" id={"1.2"} />
          <ListItem
            index="1.3"
            contents="사사지 마사노리와의 결별"
            id={"1.3"}
          />
        </div>
        <ListItem index="2" contents="멤버" id={"2"} />
        <div className="pl-contents_padding">
          <ListItem index="2.1" contents="축구" id={"2.1"} />
          <ListItem index="2.2" contents="야구" id={"2.2"} />
          <ListItem index="2.3" contents="농구" id={"2.3"} />
        </div>
      </ul>
    </div>
  );
};

export default TableOfContents;
