import React, { FormEvent, useState } from "react";
import Header from "../../../components/Header";
import parser from "../../../lib/parseMarkupData";
import PageTitle from "../../../components/@common/PageTitle";
import { PrismaClient } from "@prisma/client";
import PostForm from "@/components/@common/PostForm";
import EditForm from "@/components/edit/EditForm";

export const dynamic = "force-dynamic";

const page = async ({
  params: { title: titleParam },
}: {
  params: {
    title: string;
  };
}) => {
  const client = new PrismaClient();

  const page = await client.post.findFirst({
    where: {
      title: decodeURIComponent(titleParam),
    },
    select: {
      title: true,
      content: true,
    },
  });

  if (!page) {
    return <h1 className="page__title">page not found</h1>;
  }

  const { content, title } = page;

  return (
    <div>
      <PageTitle title={`문서 편집: ${title}`} />
      <div className="mb-4" />

      <EditForm page={{ title, content }} />
    </div>
  );
};

export default page;
