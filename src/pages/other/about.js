import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
// import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
// import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
// import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
// import Benefits from "../../components/Other/Benefits";
// import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine";
// import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
// //json
// import introductionOneData from "../../data/introduction/introductionOne.json";
// import introductionTwoData from "../../data/pages/about.json";
// import testimonialOneData from "../../data/testimonial/data.json";

import { myseo } from "../../data/SEO/about";
const myseo1 = {
  title: myseo.title,
  description: myseo.description,
  keyword: myseo.keyword,
  openGraph: {
    type: myseo.openGraph.type,
    url: myseo.openGraph.url,
    title: myseo.openGraph.title,
    description: myseo.openGraph.description,
    image: myseo.openGraph.image,
  },
};

import {
  AboutDestination,
  AboutSource,
} from "../../common/componentsSets/AboutSets";

import { useSelector } from "react-redux";

let customerDestination = [];
let customerSelect = [];
let layoutScreen;

export default function () {
  customerSelect = useSelector((state) =>
    state.homepageReducer.aboutcom.GetDestination
      ? state.homepageReducer.aboutcom.GetDestination
      : AboutDestination
  );
  customerDestination = [];
  customerSelect.map((comp, _key1) => {
    AboutSource.map((item, _key2) => {
      if (item.id === comp.id) customerDestination.push(item);
    });
  });

  layoutScreen = customerDestination.map((comp) => {
    return comp.comName;
  });

  // console.log(layoutScreen);
  return (
    <LayoutFour myseo={myseo1}>
      <Breadcrumb title="關於我們">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="關於我們" current />
      </Breadcrumb>
      {layoutScreen}
    </LayoutFour>
  );
  // return (
  //   <LayoutFour myseo={myseo1}>
  //     <Breadcrumb title="關於我們">
  //       <BreadcrumbItem name="Home" />
  //       <BreadcrumbItem name="關於我們" current />
  //     </Breadcrumb>

  //     {/* <IntroductionOne data={introductionOneData} />
  //     <IntroductionTwo data={introductionTwoData} style={{ marginBottom: 0 }} />
  //     <TestimonialOne
  //       data={testimonialOneData}
  //       style={{ backgroundColor: "#fff", marginBottom: 0 }}
  //     />
  //     <IntroductionNine />
  //     <Benefits />
  //     <InstagramTwo /> */}
  //   </LayoutFour>
  // );
}
