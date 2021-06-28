import React from "react";
// import Head from "next/head";
import Meta from "../../components/Layout/modules/Head";

import FooterOne from "../Footer/FooterOne";
import withScrollFixed from "../../common/withScrollFixed";
import HeaderOne from "../Header/HeaderOne";
import { useRouter } from "next/router";
import multilingual from "../../common/multilingual";
let ScrollFixedHeader = withScrollFixed(HeaderOne);

export default function LayoutOne(props) {
  const router = useRouter();
  console.log("Home" + router.asPath);
  return (
    <>
      <Meta myseo={props.myseo}>
        <title>{props.title || multilingual("app.homeTitle")}</title>
      </Meta>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterOne multilingual={multilingual} />
    </>
  );
}
