import { PrismaClient } from "@prisma/client";
import parser from "@/lib/parseMarkupData";
import PageTitle from "@/components/@common/PageTitle";
import Tools from "@/components/main/Tools";
import { formatDateYYYYMMDDHHMMSS } from "@/lib/formatDate";
import TableOfContents from "@/components/main/TableOfContents";

const wikiPage = async ({
  params: { title },
}: {
  params: {
    title: string;
  };
}) => {
  const client = new PrismaClient();

  const page = await client.post.findFirst({
    where: {
      title: decodeURIComponent(title),
    },
  });

  if (!page) {
    return <h1 className="page__title">page not found</h1>;
  }

  const { html, table_of_contents } = parser(page.content);

  return (
    <div>
      <div className="flex main__article__contents-header mb-article_gutter_y">
        <div className="flex flex-col flex-1 gap-2">
          <PageTitle title={page.title} />
          <span className="text-font_secondary_color text-sm block">
            최근 수정 시각: {formatDateYYYYMMDDHHMMSS(page.updatedAt)}
          </span>
        </div>
        <Tools title={page.title}></Tools>
      </div>
      <div className="main__advertisement h-20 mb-article_gutter_y bg-nav_bar_hover_color"></div>
      <TableOfContents list={table_of_contents}></TableOfContents>
      <div
        className="page__content min-h-200lvh"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </div>
  );
};

export default wikiPage;
