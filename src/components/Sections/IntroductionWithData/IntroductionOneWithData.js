import React, { useRef, useEffect } from "react";
import IntroductionOne from "../Introduction/IntroductionOne";
import data from "../../../data/introduction/introductionOne.json";

export default function IntroductionOneWithData() {
  return <IntroductionOne data={data} />;
}
