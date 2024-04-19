"use client";

import React, { useState } from "react";
import parser from "../../lib/parseMarkupData";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
import PageTitle from "../../components/@common/PageTitle";
import PostForm from "@/components/@common/PostForm";

const page = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [parsedResult, setParsedResult] = useState("");

  const router = useRouter();

  const prisma = new PrismaClient();

  const { title, content } = form;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 입력해주세요");
      return;
    }

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/w/" + encodeURIComponent(title));
      } else {
      }
    } catch (e) {
      alert("데이터베이스 오류");
    }
  };

  return (
    <div>
      <PageTitle title="새로운 문서 생성" />
      <div className="mb-4" />
      <PostForm
        form={{ title, content }}
        setForm={setForm}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default page;
