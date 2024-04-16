import React from "react";
import { HyperLinkText } from "../@common/Text";

const FootNoteItem = ({
  index,
  contents,
}: {
  index: string;
  contents: string;
}) => {
  return (
    <div className="text-white gap-1 mb-1.5">
      <HyperLinkText href="https://www.naver.com">[{index}] </HyperLinkText>
      <span className="text-white text-content_size">{contents}</span>
    </div>
  );
};

const FootNote = () => {
  return (
    <div className="mt-[22.5px] pt-2 border-table_border_color border-t-1">
      <FootNoteItem
        index="1"
        contents="실제로 90년대 중반 인터뷰에서 보컬 쿠사노 마사무네가 앨범 작업 중에 라이드의 Nowhere 앨범에 영향을 받았다고 언급하는 등 당시에도 이미 얼터너티브를 지향하고 있었다. 또한 이들의 데뷔 앨범은 '최초의 일본 얼터너티브 록 앨범'이라고 불리기도 한다."
      />
      <FootNoteItem index="2" contents="밴드 역사" />
      <FootNoteItem index="3" contents="밴드 역사" />
    </div>
  );
};

export default FootNote;
