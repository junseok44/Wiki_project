import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import useFontAwesome from "./hooks/useFontAwesome";
import Card from "./components/@common/Card";
import CurrentSearch from "./components/main/CurrentSearch";
import MainArticle from "./components/main/MainArticle";
import RecentChanges from "./components/main/RecentChanges";
import NamuNews from "./components/main/NamuNews";
import FootNote from "./components/main/FootNote";
import MainSideBar from "./components/main/MainSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faComments,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import InfoTable from "./components/main/InfoTable";
import TableOfContents from "./components/main/TableOfContents";
import ArticleBlock from "./components/main/ArticleBlock";
import Link from "next/link";
import ContentEditToos from "./components/main/Tools";
import Tools from "./components/main/Tools";

const page = () => {
  return (
    <>
      <div className="flex main__article__contents-header mb-article_gutter_y">
        <div className="flex flex-col flex-1 gap-2">
          <h1 className="text-font_color text-2xs font-bold m-0 p-0 leading-none block">
            스핏츠
          </h1>
          <span className="text-font_secondary_color text-sm block">
            최근 수정 시각: 2024-04-08 09:42:15
          </span>
        </div>
        <Tools></Tools>
      </div>
      <div className="main__advertisement h-20 mb-article_gutter_y bg-nav_bar_hover_color"></div>
      <div>
        <div>
          <div className="w-table_width float-right block">
            <InfoTable></InfoTable>
          </div>
          <div className="ml-1/2">
            <TableOfContents></TableOfContents>
          </div>
          <div className="clear-both"></div>
        </div>
        <ArticleBlock title="개요" indexId="1" />
        <ArticleBlock title="개요" indexId="1.1">
          1987년에 결성한 일본의 밴드. 정식명칭은 일어로 スピッツ이다. 미스터
          칠드런과 함께 일본인들에게 절대적인 사랑을 받는 밴드이다. 레이블은
          유니버셜 J이며, 소속사는 Grasshopper. 국내에서는 90년 중후반대부터
          이름이 알려지기 시작하였으며 2001년과 2003년, 2005년, 2008년 내한
          공연을 하였다. 2015년 8월까지 총 판매량은 2,085만장을 기록하고 있다.
          음악사적으로는 일본의 1세대 얼터너티브 락, 컬리지 락 밴드 중 하나로
          분류되며 일본 내에서 이 쪽 장르의 확산에 서니 데이 서비스, 미스터
          칠드런 등과 함께 지대한 영향을 끼쳤다. [1] 대표곡인 로빈슨이나 체리
          같은 편안한 곡들로 인해 소프트한 밴드로 인식하기 쉽지만 실제로 공연에
          가보면 엄청 시끄럽고 강력한 록밴드 그 자체이다.
        </ArticleBlock>
        <ArticleBlock title="왜 그럴까?" indexId="1.2">
          1987년에 결성한 일본의 밴드. 정식명칭은 일어로 スピッツ이다. 미스터
          칠드런과 함께 일본인들에게 절대적인 사랑을 받는 밴드이다. 레이블은
          유니버셜 J이며, 소속사는 Grasshopper. 국내에서는 90년 중후반대부터
          이름이 알려지기 시작하였으며 2001년과 2003년, 2005년, 2008년 내한
          공연을 하였다. 2015년 8월까지 총 판매량은 2,085만장을 기록하고 있다.
          음악사적으로는 일본의 1세대 얼터너티브 락, 컬리지 락 밴드 중 하나로
          분류되며 일본 내에서 이 쪽 장르의 확산에 서니 데이 서비스, 미스터
          칠드런 등과 함께 지대한 영향을 끼쳤다. [1] 대표곡인 로빈슨이나 체리
          같은 편안한 곡들로 인해 소프트한 밴드로 인식하기 쉽지만 실제로 공연에
          가보면 엄청 시끄럽고 강력한 록밴드 그 자체이다.
        </ArticleBlock>
        <ArticleBlock title="밴드 역사" indexId="2"></ArticleBlock>
        <ArticleBlock title="결성과 데뷔" indexId="2.1">
          1986년 도쿄조형대학에서 쿠사노 마사무네와 타무라 아키히로가 만나
          밴드부에 들어가서 '치타즈'라는 그룹을 결성하고, 당시 일본
          언더그라운드에서 활성화 중이던 펑크 락의 영향을 받아 펑크를
          시도하였다. 그후 기타 멤버를 영입하면서 그룹 이름을 'The Spitz'로
          개명하였으나, 블루 하츠의 노래 '人にやさしく'에 충격을 받은 마사무네는
          곧 한계를 느끼고 활동을 중단하였다. 그 후 쿠사노 마사무네가
          도쿄조형대학을 중퇴하고 무사시노미술대학에 입학하였으나, 그후에도
          타무라의 교류는 지속하였다. 그러던 중 타무라가 소꿉친구 미와 테츠야를
          초대하고 미와가 같은 동아리의 드러머 사키야마 타츠오를 영입하면서
          마사무네와 함께 4인조 체제의 'Spitz'를 결성하였고, 도쿄 일대의 라이브
          하우스에서 공연을 하면서 밴드 생활을 이어나갔다. 초기에는 아직
          블루하츠의 영향력에서 벗어나지 못한 모습을 보였으나, 곧 밴드
          자체적으로 한계를 느끼고 포크 스타일의 음악으로 전향하였다. 그후 점점
          이름을 알려나가다 1990년 미니앨범 'ヒバリのこころ(종달새의 마음)'를
          발매하며 인디즈로 데뷔하고, 1991년 폴리도르 레코드에서 1집
          'スピッツ(스핏츠)'와 싱글 'ヒバリのこころ(종달새의 마음)'을 발매하면서
          정식으로 메이저 데뷔하였다.
        </ArticleBlock>
        <ArticleBlock title="현재" indexId="2.2">
          이후 스핏츠는 さわって・変わって(만져줘, 변해줘) 싱글부터 카메다
          세이지[7]를 프로듀서로 맞아 들이고, 2002년 10집 앨범
          三日月ロック(초승달 록)을 발매하였다. 하야부사의 거친 모습을 다소
          덜어내고 90년대 전성기 풍으로 회귀하였던 이 앨범으로 스핏츠는 다시
          오리콘 차트 1위를 거머쥐는데 성공한다. 2003년 한 해를 통째로 쉰
          스핏츠는 2004년 당시 인기있던 버라이어티 프로그램인 '아이노리'의
          주제가로 타이업된 スターゲイザー 싱글을 발표하였다. 당시까지만 해도
          아이노리 주제가들은 모두 오리콘 차트 1위를 차지했었기에,[8] 마사무네는
          '1위 기록을 깨서 죄송하네요'라고 말할 정도로 압박감이 있었다고
          말했었지만, 스칼렛 싱글 이후 간만에 오리콘 1위를 차지하면서 히트에
          성공한다.[9] 이후 발매한 B-SIDE 앨범 色色衣와 11집 앨범 スーベニア
          앨범도 안정적인 판매량을 기록하였고, 이 시기부터의 스핏츠는 안정기에
          접어들게 된다. 스베니아 앨범 이후 さざなみCD, とげまる 앨범까지
          한결같이 좋은 음악성을 선보이면서 대중과 골수 팬들 양쪽의 지지를
          고르게 얻는데 성공해냈다. 다만 일부 팬들의 경우 카메다 세이지 프로듀싱
          이후 스타일이 정형화되었다고 불만을 가지기도 하지만, 사실 스핏츠
          음악은 (하야부사 시절을 제외하면) 로빈손 이후부터 한결같았다(...).
          2013년, 2010년 이후 3년 간의 공백을 깨고 싱글
          'さらさら(졸졸)'／'僕はきっと旅に出る(나는 여행을 떠날 거야)'를
          발표하였으며[10], 2013년 9월 11일 정규 14집 '小さな生き物'를 발표했다.
          발매 첫날 3만 7천장을 팔아치우면서 건재함을 과시하는 중. 2015년 4월
          15일에 아이튠스와 다운로드 사이트 '레코쵸크'를 통해 '雪風(눈바람)'를
          발표했다. '雪風'는 텔레비젼 도쿄 계열 드라마 '不便な便利屋(불편한
          심부름센터)'의 엔딩 테마로 쓰였다. 2016년 4월 27일 새 싱글 'みなと'를
          발표했다. 발매 전에 NTT 동일본의 CM いっしょに、一生懸命に。에
          삽입되었다. 이 후 같은 해 7월 27일에 신보 '醒めない'가 발매 될 것임을
          발표하였다. 신보 醒めない는 주간 순위에서는 2위를 기록하였지만 총
          판매량은 전작을 이미 뛰어넘었고, 발매 3달이 지난 10월 시점까지
          차트에서 1000장대를 유지하고 있다.
        </ArticleBlock>
        <ArticleBlock title="뭐라는 거야" indexId="2.3">
          ㅈㄷㄹㅁㅈㄷㄹㅈㄷ
        </ArticleBlock>

        <FootNote />
      </div>
    </>
  );
};

export default page;
