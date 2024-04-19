import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import PageTitle from "../../components/@common/PageTitle";
import { HyperLinkText } from "@/components/@common/Text";

const page = async () => {
  const client = new PrismaClient();

  const page = await client.post.findMany({
    select: {
      id: true,
      title: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 10,
  });

  return (
    <div>
      <PageTitle title="최근 문서" />
      <div className="mb-4" />

      <ul>
        {page.map((post) => (
          <li key={post.id}>
            <HyperLinkText href={`/w/${encodeURIComponent(post.title)}`}>
              {post.title}
            </HyperLinkText>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
