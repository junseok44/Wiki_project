"use client";

import React, { useState } from "react";

const PostForm = ({
  form,
  setForm,
  onSubmit,
  isEditMode,
}: {
  form: {
    title: string;
    content: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isEditMode?: boolean;
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(e);
    } catch (e) {
      alert("문서 편집에 실패했습니다. 다시 시도해주세요");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      content: e.target.value,
    });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isEditMode && (
        <input
          className="w-full mb-4 px-2 py-1 rounded-sm"
          placeholder="제목 입력"
          onChange={handleChangeTitle}
          value={form.title}
        ></input>
      )}

      <textarea
        className="w-full"
        onChange={handleChangeContent}
        rows={10}
        value={form.content}
      ></textarea>
      <button type="submit" className="text-black w-20 bg-white">
        submit
      </button>
      {loading && <span className="ml-1 text-white">loading...</span>}
    </form>
  );
};

export default PostForm;
