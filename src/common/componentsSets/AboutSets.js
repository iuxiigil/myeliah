import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
import Benefits from "../../components/Other/Benefits";
import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
//json
import introductionOneData from "../../data/introduction/introductionOne.json";
import introductionTwoData from "../../data/pages/about.json";
import testimonialOneData from "../../data/testimonial/data.json";

export const AboutDestination = [];

export const AboutSource = [
  {
    id: "31",
    category: "公司介紹",
    key: "31",
    remark: "公司介紹一",
    comName: <IntroductionOne data={introductionOneData} />,
    src: "/assets/images/background/c1.png",
  },
  {
    id: "32",
    category: "公司介紹",
    key: "32",
    remark: "公司介紹二",
    comName: <IntroductionTwo data={introductionTwoData} />,
    src: "/assets/images/background/c2.png",
  },
  {
    id: "33",
    category: "產品見證",
    key: "33",
    remark: "產品見證",
    comName: <TestimonialOne data={testimonialOneData} />,
    src: "/assets/images/background/c3.png",
  },
  {
    id: "34",
    category: "優點",
    key: "34",
    remark: "優點",
    comName: <Benefits />,
    src: "/assets/images/background/c4.png",
  },
  {
    id: "35",
    category: "公司介紹",
    key: "35",
    remark: "公司介紹七",
    comName: <IntroductionNine />,
    src: "/assets/images/background/c5.png",
  },
  {
    id: "36",
    category: "IG",
    key: "36",
    remark: "IG2",
    comName: <InstagramTwo />,
    src: "/assets/images/background/c6.png",
  },
];
