import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { title, content } = await req.json();

  if (!title || !content) {
    return Response.json(
      { message: "제목과 내용을 입력해주세요" },
      {
        status: 400,
      }
    );
  }

  try {
    await prisma.post.create({
      data: {
        title,
        content,
      },
    });
  } catch (e) {
    console.error(e);
    return Response.json(
      { message: "데이터베이스 오류" },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ message: title });
}

// }
