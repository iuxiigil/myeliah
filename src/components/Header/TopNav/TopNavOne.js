import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import { renderContainer } from "../../../common/utils";
import actions from "../../../redux/reducers/languageSwitcher/actions";
// import Select from "react-select";

export default function TopNavOne({ container }) {
  const dispatch = useDispatch();
  // const options = [
  //   { id: "1", value: "en", label: "EN" },
  //   { id: "2", value: "tw", label: "TW" },
  //   { id: "3", value: "cn", label: "CN" },
  //   { id: "4", value: "jp", label: "JP" },
  //   { id: "5", value: "ke", label: "KE" },
  // ];
  const styles = {
    fontSize: 11,
    color: "blue",
  };
  const { locale } = useSelector((state) => state.LanguageSwitcher.language);
  let selectedLanguage = locale.toUpperCase();

  const selectLanguage = (e) => {
    dispatch(actions.changeLanguage(e.toLowerCase()));
  };

  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-red" />
          {/* <p className="top-nav__wrapper__promo">
            <Link href={process.env.PUBLIC_URL + "/homepages/homepage1"}>
              <a>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/promotion1.png"}
                  alt="Logo"
                />
              </a>
            </Link>
          </p> */}
          <div className="top-nav__wrapper__selectors">
            {/* selec */}
            {/* <Select
              id="cur"
              options={["USD", "VND", "YEN"]}
              getValue={(val) => setCurrency(val)}
              className="-white -borderless"
            />*/}
            <Select
              id="lang"
              lagvalue={selectedLanguage}
              options={["EN", "TW", "CN", "JP", "KE"]}
              getValue={(val) => selectLanguage(val)}
              className="-white -borderless"
            />
            <Link href={process.env.PUBLIC_URL + "#"}>
              <a className="top-nav__auth">Login/Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
