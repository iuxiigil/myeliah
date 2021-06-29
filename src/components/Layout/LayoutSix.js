import React from "react";
import Head from "next/head";

import withScrollFixed from "../../common/withScrollFixed";
import HeaderSix from "../Header/HeaderSix";
import FooterOne from "../Footer/FooterOne";

let ScrollFixedHeader = withScrollFixed(HeaderSix);

export default function LayoutSix(props) {
  return (
    <>
      <Head>
        <title>{props.title || "nitori | React"}</title>
      </Head>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterOne />
    </>
  );
}
