"use client";

import React, { useState } from "react";
import parser from "../lib/parseMarkupData";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
import PageTitle from "../components/@common/PageTitle";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [parsedResult, setParsedResult] = useState("");

  const router = useRouter();

  const prisma = new PrismaClient();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    const parsedResult = parser(content);
    setParsedResult(parsedResult);
  };

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
        // const data = await response.json();

        router.push("/w/" + title);
      } else {
        // alert("실패");
      }
    } catch (e) {
      alert("데이터베이스 오류");
    }

    // const parsedResult = parser(content);
    // setParsedResult(parsedResult);
  };

  return (
    <div>
      <PageTitle title="새로운 문서 생성" />
      <div className="mb-4" />
      <form onSubmit={onSubmit}>
        <input
          className="w-full mb-4 px-2 py-1 rounded-sm"
          placeholder="제목 입력"
          onChange={handleChangeTitle}
        ></input>
        <textarea
          className="w-full"
          onChange={handleChange}
          rows={10}
          value={content}
        ></textarea>
        <button type="submit" className="text-black w-20 bg-white">
          submit
        </button>
      </form>

      <div
        dangerouslySetInnerHTML={{ __html: parsedResult }}
        className="w-full mt-4"
      ></div>
    </div>
  );
};

export default page;
