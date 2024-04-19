"use client";

import React, { useState } from "react";
import PostForm from "../@common/PostForm";
import { useRouter } from "next/navigation";

const EditContent = ({
  page,
}: {
  page: {
    title: string;
    content: string;
  };
}) => {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/edit", {
        method: "POST",
        body: JSON.stringify({
          title: page.title,
          content: form.content,
        }),
      });

      router.push(`/w/${encodeURIComponent(page.title)}`, {});
    } catch (e) {
      alert("문서 편집에 실패했습니다. 다시 시도해주세요");
    }
  };

  const [form, setForm] = useState({
    title: page.title,
    content: page.content,
  });

  return (
    <>
      <PostForm form={form} setForm={setForm} onSubmit={onSubmit} isEditMode />
    </>
  );
};

export default EditContent;
