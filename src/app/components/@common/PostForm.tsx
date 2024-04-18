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
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isEditMode?: boolean;
}) => {
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
    <form onSubmit={onSubmit}>
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
    </form>
  );
};

export default PostForm;
