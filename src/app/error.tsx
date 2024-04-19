"use client";

import React from "react";
import PageTitle from "../components/@common/PageTitle";
import { FormButton } from "../components/@common/Button";
import { useRouter } from "next/navigation";

const error = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return (
    <div>
      <PageTitle title="에러가 발생했습니다." />
      <div className="mb-4" />
      <FormButton onClick={goBack}>홈으로 이동하기</FormButton>
    </div>
  );
};

export default error;
