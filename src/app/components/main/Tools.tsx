import {
  faBook,
  faComments,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Tools = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="flex items-start">
      <div className="flex">
        <Link
          href={`/edit/${encodeURIComponent(title)}`}
          className="h-rectangle_button_height border-button_border_color border-1 border-r-0 bg-button_background_color flex px-3 py-1 text-font_secondary_color rounded-tl rounded-bl gap-2 items-center"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          편집
        </Link>
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
  );
};

export default Tools;
