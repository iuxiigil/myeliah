import LayoutOne from "../../components/Layout/LayoutOne";
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
import { componentSections } from "../../data/slider/sliderSetting";

const customerSelect = ["1", "2", "3", "4", "5", "6", "7"];

let setCustSelect = [];

const getCustSelect = () => {
  setCustSelect = [];
  customerSelect.map((item, key2) => {
    componentSections.map((comp, key1) => {
      if (comp.id === item) {
        setCustSelect.push(comp);
        // console.log(comp.comName);
      }
    });
  });
};

export default function homepage1() {
  getCustSelect();
  return (
    <LayoutOne title="美麗佳人" className="-style-1">
      {setCustSelect.map((comp) => {
        return comp.comName;
      })}
    </LayoutOne>
  );
}
