import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, content } = await req.json();
  const client = new PrismaClient();

  try {
    const target = await client.post.findFirst({
      where: {
        title,
      },
    });

    if (!target) {
      return Response.json({ message: "page not found" }, { status: 404 });
    }

    await client.post.update({
      where: {
        id: target.id,
      },
      data: {
        content,
      },
    });
  } catch (e) {
    return Response.json({ message: "error" }, { status: 500 });
  }

  return Response.json({ message: "success" });
}
