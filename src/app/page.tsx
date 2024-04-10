import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import useFontAwesome from "./hooks/useFontAwesome";
import MainContentBox from "./components/@common/MainContentBox";

const page = () => {
  return (
    <div className="bg-component_background_color min-h-screen">
      <div className="mb-4">
        <Header></Header>
      </div>
      <div className="min-h-screen">
        <Container>
          <div className="flex gap-4">
            <div className="main__article flex-1">
              <MainContentBox>
                <h1 className="text-white tXext-2xs">를르슈 람페르지</h1>
              </MainContentBox>
            </div>
            <div className="main__sidebar hidden lg:flex flex-col lg:w-sidebar_width_lg xl:w-sidebar_width_xl gap-4">
              <MainContentBox>dfdf</MainContentBox>
              <MainContentBox>dfdf</MainContentBox>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
