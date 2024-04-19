import React from "react";
import Card from "../@common/Card";
import CardTitle from "../@common/CardTitle";
import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HyperLinkText } from "../@common/Text";
import { PrismaClient } from "@prisma/client";
import { formatRecentTime } from "@/lib/formatDate";

const ListItem = ({ time, title }: { time: Date; title: string }) => {
  return (
    <li className="flex items-center mb-1">
      <div className="flex-1">
        <HyperLinkText href={`/w/${encodeURIComponent(title)}`}>
          {title}
        </HyperLinkText>
      </div>
      <span className="text-xs text-white">{formatRecentTime(time)}</span>
    </li>
  );
};

const RecentChanges = async () => {
  const client = new PrismaClient();

  const pages = await client.post.findMany({
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
    take: 8,
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <Card>
      <div className="p-contents_padding">
        <CardTitle icon={faClock}>
          <div className="flex flex-1 justify-between items-center">
            <CardTitle.Text>최근 바뀐 문서</CardTitle.Text>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </CardTitle>
        {pages.map((page) => (
          <ListItem time={page.updatedAt} title={page.title} />
        ))}
      </div>
    </Card>
  );
};

export default RecentChanges;
