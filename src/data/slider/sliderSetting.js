import SliderTwo from "../../components/Sections/Slider/SliderTwo";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import IntroductionSix from "../../components/Sections/Introduction/IntroductionSix";
import IntroductionEight from "../../components/Sections/Introduction/IntroductionEight";
import IntroductionSeven from "../../components/Sections/Introduction/IntroductionSeven";
import IntroductionTen from "../../components/Sections/Introduction/IntroductionTen";
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import TeamOne from "../../components/Sections/Team/TeamOne";

import introductionOneData from "../../data/introduction/introductionOne.json";
import productSlideOneData from "../../data/products.json";
import testimonialOneData from "../../data/testimonial/data.json";
import introductionTwoData from "../../data/introduction/introductionTwo.json";
import introductionSevenData from "../../data/introduction/introductionSeven.json";
import introductionSixData from "../../data/introduction/introductionSix.json";
import introductionEightData from "../../data/introduction/introductionEight.json";
import introductionTenData from "../../data/introduction/introductionTen.json";
import sliderData from "../../data/slider/sliderOne.json";
import teamOneData from "../../data/team/teamOne.json";

export const silderSetting = [
  {
    id: "1",
    remark: "大輪播",
    comName: <SliderTwo data={sliderData} className="-style-1" showDots />,
    src: "/assets/images/background/c1.png",
  },
  {
    id: "2",
    remark: "公司介紹一",
    comName: <IntroductionOne data={introductionOneData} />,
    src: "/assets/images/background/c2.png",
  },
  {
    id: "3",
    remark: "公司介紹二",
    comName: <IntroductionTwo data={introductionTwoData} />,
    src: "/assets/images/background/c3.png",
  },
  {
    id: "7",
    remark: "預約服務",
    comName: <CTAOne />,
    src: "/assets/images/background/c7.png",
  },
];

export const componentSections = [
  {
    id: "1",
    remark: "大輪播",
    comName: <SliderTwo data={sliderData} className="-style-1" showDots />,
    src: "/assets/images/background/c1.png",
  },
  {
    id: "2",
    remark: "公司介紹一",
    comName: <IntroductionOne data={introductionOneData} />,
    src: "/assets/images/background/c1.png",
  },
  {
    id: "3",
    remark: "公司介紹二",
    comName: <IntroductionTwo data={introductionTwoData} />,
    src: "/assets/images/background/c1.png",
  },
  {
    id: "4",
    remark: "產品輪播",
    comName: <ProductSlideOne data={productSlideOneData} />,
    src: "/assets/images/background/c4.png",
  },
  {
    id: "5",
    remark: "產品見證",
    comName: <TestimonialOne data={testimonialOneData} />,
    src: "/assets/images/background/c5.png",
  },
  {
    id: "6",
    remark: "專業團隊",
    comName: <TeamOne data={teamOneData} />,
    src: "/assets/images/background/c6.png",
  },
  {
    id: "7",
    remark: "預約服務",
    comName: <CTAOne />,
    src: "/assets/images/background/c7.png",
  },
  {
    id: "8",
    remark: "公司介紹三",
    comName: <IntroductionSix data={introductionSixData} />,
    src: "/assets/images/background/c8.png",
  },
  {
    id: "9",
    remark: "公司介紹四",
    comName: <IntroductionSeven data={introductionSevenData} />,
    src: "/assets/images/background/c9.png",
  },
  {
    id: "10",
    remark: "公司介紹五",
    comName: <IntroductionEight data={introductionEightData} />,
    src: "/assets/images/background/c10.png",
  },
  {
    id: "11",
    remark: "公司介紹六",
    comName: <IntroductionTen data={introductionTenData} />,
    src: "/assets/images/background/c11.png",
  },
];
