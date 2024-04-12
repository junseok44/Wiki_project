import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import useFontAwesome from "./hooks/useFontAwesome";
import Card from "./components/@common/Card";
import CurrentSearch from "./components/main/CurrentSearch";
import MainArticle from "./components/main/MainArticle";
import RecentChanges from "./components/main/RecentChanges";

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
              <MainArticle></MainArticle>
            </div>
            <div className="main__sidebar hidden lg:flex flex-col lg:w-sidebar_width_lg xl:w-sidebar_width_xl gap-4">
              <CurrentSearch />
              <RecentChanges />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
