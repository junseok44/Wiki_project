import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import PageTitle from "../components/@common/PageTitle";

const page = async () => {
  const client = new PrismaClient();

  const page = await client.post.findMany();

  return (
    <div>
      <PageTitle title="최근 문서" />
      <div className="mb-4" />

      <ul>
        {page.map((post) => (
          <li key={post.id}>
            <Link
              href={`/w/${encodeURIComponent(post.title)}`}
              className="text-white hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
