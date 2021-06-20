import React from "react";
import Head from "next/head";

import FooterOne from "../Footer/FooterOne";
import withScrollFixed from "../../common/withScrollFixed";
import HeaderOne from "../Header/HeaderOne";
// import { useIntl } from "react-intl";
import multilingual from "../../common/multilingual";
let ScrollFixedHeader = withScrollFixed(HeaderOne);

export default function LayoutOne(props) {
  // const intl = useIntl();
  console.log(props);
  return (
    <>
      <Head myseo={props.myseo}>
        <title>{props.title || multilingual("app.homeTitle")}</title>
      </Head>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterOne multilingual={multilingual} />
    </>
  );
}
