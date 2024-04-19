import React from "react";
import MainContentBox from "../@common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { HyperLinkText } from "../@common/Text";

const SearchListItem = ({
  rank,
  href,
  children,
}: {
  rank: number;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="flex h-8 items-center">
      <span className="mr-2 w-4 flex justify-end items-center font-bold">
        {rank}
      </span>
      <HyperLinkText href={href} className="text-sm">
        {children}
      </HyperLinkText>
    </li>
  );
};

const CurrentSearch = () => {
  return (
    <MainContentBox>
      <div className="group hover:px-4 hover:py-4 hover:h-auto px-2 py-2 h-12  text-white overflow-hidden">
        <div className="hidden group-hover:flex items-center mb-4 gap-2 ">
          <FontAwesomeIcon icon={faBook} />
          <h2 className="text-xl">실시간 검색어</h2>
        </div>
        <ul>
          <SearchListItem rank={1} href="https://www.naver.com">
            사라질 수는 없어요..
          </SearchListItem>
          <SearchListItem rank={1} href="https://www.naver.com">
            사라질 수는 없어요..
          </SearchListItem>{" "}
          <SearchListItem rank={1} href="https://www.naver.com">
            사라질 수는 없어요..
          </SearchListItem>
        </ul>
      </div>
    </MainContentBox>
  );
};

export default CurrentSearch;
