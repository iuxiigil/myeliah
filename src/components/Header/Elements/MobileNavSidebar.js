import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import NavigatorMobile from "./NavigatorMobile";
import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import actions from "../../../redux/reducers/languageSwitcher/actions";

export default function MobileNavSidebar({ showMobileNav, setShowMobileNav }) {
  const [searchInput, setSearchInput] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.LanguageSwitcher.language);
  let selectedLanguage = locale.toUpperCase();

  const selectLanguage = (e) => {
    dispatch(actions.changeLanguage(e.toLowerCase()));
  };
  return (
    <>
      <ClientOnlyPortal selector="#nav-sidebar">
        <CSSTransition
          in={showMobileNav}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="navigation-sidebar">
            <div className="search-box">
              <form>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>
                  <img
                    src="/assets/images/header/search-icon.png"
                    alt="Search icon"
                  />
                </button>
              </form>
            </div>
            <NavigatorMobile />
            <div className="navigation-sidebar__footer">
              {/* <Select
                options={["USD", "VND", "YEN"]}
                getValue={(val) => setCurrency(val)}
                className="-borderless"
              /> */}
              <Select
                id="lang"
                lagvalue={selectedLanguage}
                options={["EN", "TW", "CN", "JP", "KE"]}
                getValue={(val) => selectLanguage(val)}
                className="-borderless"
              />
              <a className="navigation-sidebar__footer__auth">Login/Register</a>
              <SocialIcons />
            </div>
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showMobileNav && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={() => setShowMobileNav(false)}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
