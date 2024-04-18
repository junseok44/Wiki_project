import { PrismaClient } from "@prisma/client";
import parser from "@/app/lib/parseMarkupData";
import PageTitle from "@/app/components/@common/PageTitle";
import Tools from "@/app/components/main/Tools";

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

  const html = parser(page.content);

  return (
    <div>
      <div className="flex main__article__contents-header mb-article_gutter_y">
        <div className="flex flex-col flex-1 gap-2">
          <PageTitle title={page.title} />
          <span className="text-font_secondary_color text-sm block">
            최근 수정 시각: 2024-04-08 09:42:15
          </span>
        </div>
        <Tools title={page.title}></Tools>
      </div>
      <div
        className="page__content"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </div>
  );
};

export default wikiPage;
