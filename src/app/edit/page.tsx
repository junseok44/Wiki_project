"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import parser from "../lib/parseMarkupData";
// import { useRouter } from "next/router";

const page = () => {
  const [text, setText] = useState("");

  const [parsedResult, setParsedResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const parsedResult = parser(text);
    setParsedResult(parsedResult);
  };

  return (
    <div>
      <h1 className="text-font_color text-2xs font-bold m-0 p-0 leading-none block">
        스핏츠
      </h1>
      <textarea
        className="w-full"
        onChange={handleChange}
        rows={10}
        value={text}
      ></textarea>
      <button onClick={handleClick} className="text-black w-20 bg-white">
        submit
      </button>
      <div
        dangerouslySetInnerHTML={{ __html: parsedResult }}
        className="w-full mt-4"
      ></div>
    </div>
  );
};

export default page;
