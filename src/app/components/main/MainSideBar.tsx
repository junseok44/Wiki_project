import React from "react";
import CurrentSearch from "./CurrentSearch";
import RecentChanges from "./RecentChanges";
import NamuNews from "./NamuNews";

const MainSideBar = () => {
  return (
    <div className="main__sidebar hidden lg:flex flex-col lg:w-sidebar_width_lg xl:w-sidebar_width_xl gap-4 ">
      <CurrentSearch />
      <RecentChanges />
      <div className="h-60 bg-card_content_color"></div>
      <NamuNews />
      <div className="sticky top-4 h-80 bg-card_content_color flex justify-center items-center text-white rounded-small">
        광고
      </div>
    </div>
  );
};

export default MainSideBar;
