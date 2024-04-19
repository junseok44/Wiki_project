import React from "react";
import Card from "../@common/Card";
import CardTitle from "../@common/CardTitle";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { HyperLinkText } from "../@common/Text";

const NewsListItem = ({
  rank,
  href,
  children,
}: {
  rank: number;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="flex items-center truncate mb-1">
      <HyperLinkText href={href} className="text-sm">
        {children}
      </HyperLinkText>
    </li>
  );
};

const NamuNews = () => {
  return (
    <Card>
      <div className="p-contents_padding">
        <CardTitle icon={faNewspaper}>
          <CardTitle.Text>나무뉴스</CardTitle.Text>
        </CardTitle>
        <NewsListItem rank={1} href="https://www.naver.com">
          이준석 "다음 대선까지 3년? 확실한가"…'홍준표 총리' 거론도(종합)
        </NewsListItem>
        <NewsListItem rank={1} href="https://www.naver.com">
          title="&quot;정부가 결자해지해야&quot; vs &quot;의사도
          책임&quot;…의료계 자성 목소리도"
        </NewsListItem>
        <NewsListItem rank={1} href="https://www.naver.com">
          이준석 "다음 대선까지 3년? 확실한가"…'홍준표 총리' 거론도(종합)
        </NewsListItem>
        <NewsListItem rank={1} href="https://www.naver.com">
          title="&quot;정부가 결자해지해야&quot; vs &quot;의사도
          책임&quot;…의료계 자성 목소리도"
        </NewsListItem>
      </div>
    </Card>
  );
};

export default NamuNews;
