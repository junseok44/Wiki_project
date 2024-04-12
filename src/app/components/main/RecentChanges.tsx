import React from "react";
import Card from "../@common/Card";
import CardTitle from "../@common/CardTitle";
import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HyperLinkText } from "../@common/Text";

const ListItem = ({ time, title }: { time: string; title: string }) => {
  return (
    <li className="flex items-center mb-1">
      <div className="flex-1">
        <HyperLinkText href={"dfdf"}>{title}</HyperLinkText>
      </div>
      <span className="text-xs text-white">{time}</span>
    </li>
  );
};

const RecentChanges = () => {
  return (
    <Card>
      <div className="p-contents_padding">
        <CardTitle icon={faClock}>
          <div className="flex flex-1 justify-between items-center">
            <CardTitle.Text>최근 바뀐 문서</CardTitle.Text>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </CardTitle>
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
        <ListItem time="방금 전" title="스핏츠" />
      </div>
    </Card>
  );
};

export default RecentChanges;
