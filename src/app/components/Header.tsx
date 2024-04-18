import React from "react";
import Container from "./Container";
import Image from "next/image";
import HeaderBtn from "./@common/HeaderBtn";
import HeaderIconBtn from "./@common/HeaderIconBtn";
import {
  faArrowRightArrowLeft,
  faBagShopping,
  faBell,
  faClock,
  faComments,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-500">
      <Container>
        <div className="header__contents flex justify-between h-[3.5rem] text-white py-menu_item_gutter_y">
          <div className="header__left flex items-stretch">
            <Link
              href="/"
              className="logo h-full mr-nav_logo_margin cursor-pointer"
            >
              <Image
                src="/images/main/MainLogo.png"
                alt="logo"
                sizes="100vw"
                width={120}
                height={120}
              />
            </Link>
            <ul className="flex items-stretch gap-nav_item_gap">
              <HeaderBtn text="문서 작성" icon={faClock} href="/write" />
              <HeaderBtn text="최근 문서" icon={faComments} href="/list" />
              <HeaderBtn text="특수 기능" icon={faBagShopping} />
            </ul>
          </div>
          <div className="header__right items-stretch hidden lg:flex">
            <div className="header__search-box flex gap-nav_item_gap items-stretch px-4">
              <HeaderIconBtn
                icon={faBell}
                bgColor="component_background_color"
              />
              <form className="header__input-box bg-component_background_color flex items-stretch rounded-small">
                <input
                  className="bg-transparent self-center px-3"
                  placeholder="여기에서 검색"
                ></input>
                <HeaderIconBtn icon={faSearch} />
                <HeaderIconBtn icon={faArrowRightArrowLeft} />
              </form>
            </div>

            <HeaderIconBtn icon={faUser} hoverColor="nav_bar_hover_color" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
