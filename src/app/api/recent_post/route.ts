import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const client = new PrismaClient();

  const page = await client.post.findMany({
    select: {
      id: true,
      title: true,
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(page),
  };
}
