//大輪播
import SliderOne from "../../components/Sections/Slider/SliderOne";
import SliderTwo from "../../components/Sections/Slider/SliderTwo";
//公司介紹
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import IntroductionThree from "../../components/Sections/Introduction/IntroductionThree";
import IntroductionFour from "../../components/Sections/Introduction/IntroductionFour";
import IntroductionFive from "../../components/Sections/Introduction/IntroductionFive";
import IntroductionSix from "../../components/Sections/Introduction/IntroductionSix";
import IntroductionEight from "../../components/Sections/Introduction/IntroductionEight";
import IntroductionSeven from "../../components/Sections/Introduction/IntroductionSeven";
import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine";
import IntroductionTen from "../../components/Sections/Introduction/IntroductionTen";
//商品輪播
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
//客戶感言
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
//濳在客戶
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import CTATwo from "../../components/Sections/CallToAction/CTATwo";
import TeamOne from "../../components/Sections/Team/TeamOne";
//資料部分
import productSlideOneData from "../../data/products.json";
import testimonialOneData from "../../data/testimonial/data.json";
import introductionOneData from "../../data/introduction/introductionOne.json";
import introductionTwoData from "../../data/introduction/introductionTwo.json";
import introductionSevenData from "../../data/introduction/introductionSeven.json";
import introductionSixData from "../../data/introduction/introductionSix.json";
import introductionEightData from "../../data/introduction/introductionEight.json";
import introductionTenData from "../../data/introduction/introductionTen.json";
import sliderData from "../../data/slider/sliderOne.json";
import sliderData5 from "../../data/slider/sliderFive.json";
import teamOneData from "../../data/team/teamOne.json";

export const DefaultDestination = [
  // {
  //   id: "1",
  //   category: ["大輪播",
  //   key: "1",
  //   remark: "大輪播",
  //   comName: <SliderTwo data={sliderData} className="-style-1" showDots />,
  //   src: "/assets/images/background/c1.png",
  // },
];

export const DefaultSource = [
  {
    id: "1",
    category: ["Home"],
    key: "1",
    remark: "大輪播",
    comName: <SliderTwo data={sliderData} className="-style-1" showDots />,
    src: "/assets/images/background/c1.png",
  },
  {
    id: "2",
    category: ["Home", "AboutUs"],
    key: "2",
    remark: "公司介紹一",
    comName: <IntroductionOne data={introductionOneData} />,
    src: "/assets/images/background/c2.png",
  },
  {
    id: "3",
    category: ["Home"],
    key: "3",
    remark: "公司介紹二",
    comName: <IntroductionTwo data={introductionTwoData} />,
    src: "/assets/images/background/c3.png",
  },
  {
    id: "4",
    category: ["Home"],
    key: "4",
    remark: "產品輪播",
    comName: <ProductSlideOne data={productSlideOneData} />,
    src: "/assets/images/background/c4.png",
  },
  {
    id: "5",
    category: ["Home", "AboutUs"],
    key: "5",
    remark: "產品見證",
    comName: <TestimonialOne data={testimonialOneData} />,
    src: "/assets/images/background/c5.png",
  },
  {
    id: "6",
    category: ["Home", "AboutUs"],
    key: "6",
    remark: "專業團隊",
    comName: <TeamOne data={teamOneData} />,
    src: "/assets/images/background/c6.png",
  },
  {
    id: "7",
    category: ["Home"],
    key: "7",
    remark: "預約服務",
    comName: <CTAOne />,
    src: "/assets/images/background/c7.png",
  },
  {
    id: "8",
    category: ["Home"],
    key: "8",
    remark: "公司介紹三",
    comName: <IntroductionSix data={introductionSixData} />,
    src: "/assets/images/background/c8.png",
  },
  {
    id: "9",
    category: ["Home", "AboutUs"],
    key: "9",
    remark: "公司介紹四",
    comName: <IntroductionSeven data={introductionSevenData} />,
    src: "/assets/images/background/c9.png",
  },
  {
    id: "10",
    category: ["Home"],
    key: "10",
    remark: "公司介紹五",
    comName: <IntroductionEight data={introductionEightData} />,
    src: "/assets/images/background/c10.png",
  },
  {
    id: "11",
    category: ["Home"],
    key: "11",
    remark: "公司介紹六",
    comName: <IntroductionTen data={introductionTenData} />,
    src: "/assets/images/background/c11.png",
  },
  {
    id: "12",
    category: ["Home"],
    key: "12",
    remark: "盡快聯絡",
    comName: <CTATwo />,
    src: "/assets/images/background/c12.png",
  },
  {
    id: "13",
    category: ["Home", "AboutUs"],
    key: "13",
    remark: "大輪播-1",
    comName: <SliderOne data={sliderData5} className="-style-5" />,
    src: "/assets/images/background/c13.png",
  },
];
