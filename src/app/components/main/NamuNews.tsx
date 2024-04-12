import React from "react";
import Card from "../@common/Card";
import CardTitle from "../@common/CardTitle";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const NamuNews = () => {
  return (
    <Card>
      <div className="p-contents_padding">
        <CardTitle icon={faNewspaper}>
          <CardTitle.Text>최근 바뀐 문서</CardTitle.Text>
        </CardTitle>
      </div>
    </Card>
  );
};

export default NamuNews;
