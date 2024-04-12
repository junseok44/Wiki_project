import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faComments,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../@common/Card";

const MainArticle = () => {
  return (
    <Card>
      <div className="main__article__contents p-contents_padding">
        <div className="flex">
          <div className="flex flex-col flex-1 gap-2">
            <h1 className="text-font_color text-2xs font-bold m-0 p-0 leading-none block">
              스핏츠
            </h1>
            <span className="text-font_secondary_color text-sm block">
              최근 수정 시각: 2024-04-08 09:42:15
            </span>
          </div>
          <div className="flex items-start">
            <div className="flex">
              <a className="h-rectangle_button_height border-button_border_color border-1 border-r-0 bg-button_background_color flex px-3 py-1 text-font_secondary_color rounded-tl rounded-bl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                편집
              </a>
              <a className="h-rectangle_button_height border-button_border_color border-1 border-r-0 bg-button_background_color flex px-3 py-1 text-font_secondary_color gap-2 items-center">
                <FontAwesomeIcon icon={faComments} />
                토론
              </a>
              <a className="h-rectangle_button_height border-button_border_color border-1 bg-button_background_color flex px-3 py-1 text-font_secondary_color gap-2 items-center rounded-tr rounded-br">
                <FontAwesomeIcon icon={faBook} />
                역사
              </a>
            </div>
            <button className="w-rectangle_button_width h-rectangle_button_height bg-button_background_color border-button_border_color text-font_secondary_color rounded-md ml-2">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MainArticle;
