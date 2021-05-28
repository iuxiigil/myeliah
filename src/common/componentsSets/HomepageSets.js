import React from "react";
/**
 * 
0	品牌	BrandsOne
26	商品網格呈現	ProductGrid
27	商品標籤式-1	ProductTabOne
28	商品標籤式-2	ProductTabTwo
29	商品標籤式-3	ProductTabSlideOne
30	段落抬頭	SectionTitleOne
31	側邊-1	SliderOne
32	側邊-2	SliderTwo
33	團隊	TeamOne
34	客戶感言-1	TestimonialOne
35	客戶感言-2	TestimonialTwo
36	客戶感言-3	TestimonialThree
37	商店表頭	ShopHeader
38	商品商品	ShopProducts
39	商品側邊	ShopSidebar
40	左右圖文組	LeftRightShow
 */
import BrandsOne from "../../components/Sections/Brands/BrandsOne"; //DndId:0
import BlogOne from "../../components/Sections/Blog/BlogOne"; //DndId:1
import BlogTwo from "../../components/Sections/Blog/BlogTwo"; //DndId:2
import BlogThree from "../../components/Sections/Blog/BlogThree"; //DndId:3
import CategoriesOneWithData from "../../components/Sections/Categories/CategoryOneWithData"; //DndId:4
import CategoriesTwo from "../../components/Sections/Categories/CategoriesTwo"; //DndId:5
import CTAOne from "../../components/Sections/CallToAction/CTAOne"; //DndId:6
import CTATwo from "../../components/Sections/CallToAction/CTATwo"; //DndId:7
import DaleOfWeekOne from "../../components/Sections/DealOfWeek/DaleOfWeekOne"; //DndId:8
import DaleOfWeekTwo from "../../components/Sections/DealOfWeek/DaleOfWeekTwo"; //DndId:9
import DaleOfWeekThree from "../../components/Sections/DealOfWeek/DaleOfWeekThree"; //DndId:10
import InstagramOne from "../../components/Sections/Instagram/InstagramOne"; //DndId:11
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo"; //DndId:12
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne"; //DndId:13
import IntroductionTwoWithData from "../../components/Sections/IntroductionWithData/introductionTwoWithData"; //DndId:14
import IntroductionThree from "../../components/Sections/Introduction/IntroductionThree"; //DndId:15
import IntroductionFour from "../../components/Sections/Introduction/IntroductionFour"; //DndId:16
import IntroductionFive from "../../components/Sections/Introduction/IntroductionFive"; //DndId:17
import IntroductionSix from "../../components/Sections/Introduction/IntroductionSix"; //DndId:18
import IntroductionSeven from "../../components/Sections/Introduction/IntroductionSeven"; //DndId:19
import IntroductionEight from "../../components/Sections/Introduction/IntroductionEight"; //DndId:20
import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine"; //DndId:21
import IntroductionTen from "../../components/Sections/Introduction/IntroductionTen"; //DndId:22
//DndId:23 ProductSlider
import ProductSlideOneWithData from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOneWithData"; //DndId:24
import ProductSlideTwoWithData from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideTwoWithData"; //DndId:25
//DndId:26 ProductGrid
import ProductTabOne from "../../components/Sections/ProductThumb/ProductTab/ProductTabOne"; //DndId:27
import ProductTabTwo from "../../components/Sections/ProductThumb/ProductTab/ProductTabTwo"; //DndId:28
import ProductTabSlideOne from "../../components/Sections/ProductThumb/ProductTabSlide/ProductTabSlideOne"; //DndId:29
//DndId:30 SectionTitleOne
import SliderOneWithData from "../../components/Sections/Slider/SliderOneWithData"; //DndId:31
import SliderTwoWithData from "../../components/Sections/Slider/SliderTwoWithData"; //DndId:32
import TeamOne from "../../components/Sections/Team/TeamOne"; //DndId:33
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne"; //DndId:34
import TestimonialTwo from "../../components/Sections/Testimonial/TestimonialTwo"; //DndId:35
import TestimonialThree from "../../components/Sections/Testimonial/TestimonialThree"; //DndId:36
import LeftRightShow from "../../components/Sections/LeftRightShow/LeftRightShow";
import { shop } from "../../common/variables";

//DndId:37 ShopHeader
//DndId:38 ShopProducts
//DndId:39 ShopSidebar

//資料部分
import productSlideOneData from "../../data/products.json";
import introductionSevenData from "../../data/introduction/introductionSeven.json";
import introductionSixData from "../../data/introduction/introductionSix.json";
import introductionEightData from "../../data/introduction/introductionEight.json";
import introductionTenData from "../../data/introduction/introductionTen.json";

import teamOneData from "../../data/team/teamOne.json";
import blogOneData from "../../data/blog/blog.json";
import blogData from "../../data/blog/blog.json";
import categoriesOneData from "../../data/categories/categoryOne.json";
import productTabOneData from "../../data/products.json";
import servicesData from "../../data/pages/services.json";
import testimonialData from "../../data/testimonial/testimonialThree.json";
import IntroductionOneWithData from "../../components/Sections/IntroductionWithData/IntroductionOneWithData";

//注意：官网提示React.lazy并不适合SSR
//http://bpecapi.azurewebsites.net/api/Page/PageSearch

export const DefaultDestination = {};
export const DefaultDestination_1 = {
  Code: 200,
  Message: "",
  Home: [
    {
      id: "31",
      key: "31",
    },
    {
      id: "4",
      key: "4",
    },
    {
      id: "14",
      key: "14",
    },
    {
      id: "22",
      key: "22",
    },
    {
      id: "25",
      key: "25",
    },
  ],
  About: [
    {
      id: "31",
      key: "31",
    },
    {
      id: "21",
      key: "21",
    },
    {
      id: "16",
      key: "16",
    },
    {
      id: "1",
      key: "1",
    },
    {
      id: "18",
      key: "18",
    },
  ],
  Services: [
    {
      id: "15",
      key: "15",
    },
    {
      id: "40",
      key: "40",
    },
  ],
};

export const DefaultSource = [
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "BrandsOne",
    id: "0",
    key: "0",
    remark: "品牌",
    src: "/assets/images/prototypes/Brands/BrandsOne.png",
  },
  {
    category: ["Home"],
    comName: <BlogOne data={blogOneData.slice(0, 4)} />,
    componentName: "BlogOne",
    id: "1",
    key: "1",
    remark: "部落格-1",
    src: "/assets/images/prototypes/Blog/BlogOne.png",
  },
  {
    category: ["Home"],
    comName: <BlogTwo data={blogData.slice(0, 3)} />,
    componentName: "BlogTwo",
    id: "2",
    key: "2",
    remark: "部落格-2",
    src: "/assets/images/prototypes/Blog/BlogTwo.png",
  },
  {
    category: ["Home"],
    comName: <BlogThree data={blogData.slice(0, 3)} />,
    componentName: "BlogThree",
    id: "3",
    key: "3",
    remark: "部落格-3",
    src: "/assets/images/prototypes/Blog/BlogThree.png",
  },
  {
    category: ["Home"],
    comName: <CategoriesOneWithData />,
    componentName: "CategoriesOne",
    id: "4",
    key: "4",
    remark: "商品分類-1",
    src: "/assets/images/prototypes/Categories/CategoriesOne.png",
  },
  {
    category: ["Home"],
    comName: <CategoriesTwo data={categoriesOneData} />,
    componentName: "CategoriesTwo",
    id: "5",
    key: "5",
    remark: "商品分類-2",
    src: "/assets/images/prototypes/Categories/CategoriesTwo.png",
  },
  {
    category: ["Home"],
    comName: <CTAOne />,
    componentName: "CTAOne",
    id: "6",
    key: "6",
    remark: "CallToCation-1",
    src: "/assets/images/prototypes/CTA/CTAOne.png",
  },
  {
    category: ["Home"],
    comName: <CTATwo />,
    componentName: "CTATwo",
    id: "7",
    key: "7",
    remark: "CallToCation-2",
    src: "/assets/images/prototypes/CTA/CTATwo.png",
  },
  {
    category: ["Home"],
    comName: <DaleOfWeekOne />,
    componentName: "DaleOfWeekOne",
    id: "8",
    key: "8",
    remark: "限時搶購-1",
    src: "/assets/images/prototypes/DaleOfWeek/DaleOfWeekOne.png",
  },
  {
    category: ["Home"],
    comName: <DaleOfWeekTwo />,
    componentName: "DaleOfWeekTwo",
    id: "9",
    key: "9",
    remark: "限時搶購-2",
    src: "/assets/images/prototypes/DaleOfWeek/DaleOfWeekTwo.png",
  },
  {
    category: ["Home"],
    comName: <DaleOfWeekThree />,
    componentName: "DaleOfWeekThree",
    id: "10",
    key: "10",
    remark: "限時搶購-3",
    src: "/assets/images/prototypes/DaleOfWeek/DaleOfWeekThree.png",
  },
  {
    category: ["Home"],
    comName: <InstagramOne />,
    componentName: "InstagramOne",
    id: "11",
    key: "11",
    remark: "IG-1",
    src: "/assets/images/prototypes/Instagram/InstagramOne.png",
  },
  {
    category: ["Home"],
    comName: <InstagramTwo />,
    componentName: "InstagramTwo",
    id: "12",
    key: "12",
    remark: "IG-2",
    src: "/assets/images/prototypes/Instagram/InstagramTwo.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionOneWithData />,
    componentName: "IntroductionOne",
    id: "13",
    key: "13",
    remark: "公司介紹-1",
    src: "/assets/images/prototypes/Introduction/IntroductionOne.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionTwoWithData />,
    componentName: "IntroductionTwo",
    id: "14",
    key: "14",
    remark: "公司介紹-2",
    src: "/assets/images/prototypes/Introduction/IntroductionTwo.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionThree />,
    componentName: "IntroductionThree",
    id: "15",
    key: "15",
    remark: "公司介紹-3",
    src: "/assets/images/prototypes/Introduction/IntroductionThree.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionFour />,
    componentName: "IntroductionFour",
    id: "16",
    key: "16",
    remark: "公司介紹-4",
    src: "/assets/images/prototypes/Introduction/IntroductionFour.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionFive />,
    componentName: "IntroductionFive",
    id: "17",
    key: "17",
    remark: "公司介紹-5",
    src: "/assets/images/prototypes/Introduction/IntroductionFive.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionSix data={introductionSixData} />,
    componentName: "IntroductionSix",
    id: "18",
    key: "18",
    remark: "公司介紹-6",
    src: "/assets/images/prototypes/Introduction/IntroductionSix.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionSeven data={introductionSevenData} />,
    componentName: "IntroductionSeven",
    id: "19",
    key: "19",
    remark: "公司介紹-7",
    src: "/assets/images/prototypes/Introduction/IntroductionSeven.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionEight data={introductionEightData} />,
    componentName: "IntroductionEight",
    id: "20",
    key: "20",
    remark: "公司介紹-8",
    src: "/assets/images/prototypes/Introduction/IntroductionEight.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionNine />,
    componentName: "IntroductionNine",
    id: "21",
    key: "21",
    remark: "公司介紹-9",
    src: "/assets/images/prototypes/Introduction/IntroductionNine.png",
  },
  {
    category: ["Home"],
    comName: <IntroductionTen data={introductionTenData} />,
    componentName: "IntroductionTen",
    id: "22",
    key: "22",
    remark: "公司介紹-10",
    src: "/assets/images/prototypes/Introduction/IntroductionTen.png",
  },
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "ProductSlider",
    id: "23",
    key: "23",
    remark: "商品側欄-1",
    src: "/assets/images/prototypes/Introduction/ProductSlider.png",
  },
  {
    category: ["Home"],
    comName: <ProductSlideOneWithData />,
    componentName: "ProductSlideOne",
    id: "24",
    key: "24",
    remark: "商品側欄-1",
    src: "/assets/images/prototypes/Slider/ProductSlideOne.png",
  },
  {
    category: ["Home"],
    comName: <ProductSlideTwoWithData />,
    componentName: "ProductSlideTwo",
    id: "25",
    key: "25",
    remark: "商品側欄-3",
    src: "/assets/images/prototypes/Slider/ProductSlideTwo.png",
  },
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "ProductGrid",
    id: "26",
    key: "26",
    remark: "商品網格呈現",
    src: "/assets/images/prototypes/Slider/ProductGrid.png",
  },
  {
    category: ["Home"],
    comName: (
      <ProductTabOne data={productTabOneData} categories={shop.CATEGORISE} />
    ),
    componentName: "ProductTabOne",
    id: "27",
    key: "27",
    remark: "商品標籤式-1",
    src: "/assets/images/prototypes/ProductThumb/ProductTabOne.png",
  },
  {
    category: ["Home"],
    comName: <ProductTabTwo />,
    componentName: "ProductTabTwo",
    id: "28",
    key: "28",
    remark: "商品標籤式-2",
    src: "/assets/images/prototypes/ProductThumb/ProductTabTwo.png",
  },
  {
    category: ["Home"],
    comName: <ProductTabSlideOne data={productSlideOneData} />,
    componentName: "ProductTabSlideOne",
    id: "29",
    key: "29",
    remark: "商品標籤式-3",
    src: "/assets/images/prototypes/ProductThumb/ProductTabSlideOne.png",
  },
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "SectionremarkOne",
    id: "30",
    key: "30",
    remark: "段落抬頭",
    src: "/assets/images/prototypes/Slider/SectionremarkOne.png",
  },
  {
    category: ["Home"],
    comName: <SliderOneWithData />,
    componentName: "SliderOne",
    id: "31",
    key: "31",
    remark: "大輪播-1",
    src: "/assets/images/prototypes/Slider/SliderOne.png",
  },
  {
    category: ["Home"],
    comName: <SliderTwoWithData />,
    componentName: "SliderTwo",
    id: "32",
    key: "32",
    remark: "大輪播-2",
    src: "/assets/images/prototypes/Slider/SliderTwo.png",
  },
  {
    category: ["Home"],
    comName: <TeamOne data={teamOneData} />,
    componentName: "TeamOne",
    id: "33",
    key: "33",
    remark: "團隊",
    src: "/assets/images/prototypes/Teams/TeamOne.png",
  },
  {
    category: ["Home"],
    comName: (
      <ProductTabOne data={productTabOneData} categories={shop.CATEGORISE} />
    ),
    componentName: "TestimonialOne",
    id: "34",
    key: "34",
    remark: "客戶感言-1",
    src: "/assets/images/prototypes/Testimonial/TestimonialOne.png",
  },
  {
    category: ["Home"],
    comName: (
      <TestimonialTwo data={productTabOneData} categories={shop.CATEGORISE} />
    ),
    componentName: "TestimonialTwo",
    id: "35",
    key: "35",
    remark: "客戶感言-2",
    src: "/assets/images/prototypes/Testimonial/TestimonialTwo.png",
  },
  {
    category: ["Home"],
    comName: (
      <TestimonialThree data={testimonialData} categories={shop.CATEGORISE} />
    ),
    componentName: "TestimonialThree",
    id: "36",
    key: "36",
    remark: "客戶感言-3",
    src: "/assets/images/prototypes/Testimonial/TestimonialThree.png",
  },
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "ShopHeader",
    id: "37",
    key: "37",
    remark: "商店表頭",
    src: " ",
  },
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "ShopProducts",
    id: "38",
    key: "38",
    remark: "商品商品",
    src: " ",
  },
  {
    category: ["Home"],
    comName: <BrandsOne />,
    componentName: "ShopSidebar",
    id: "39",
    key: "39",
    remark: "商品側邊",
    src: "",
  },
  {
    category: ["Home"],
    comName: <LeftRightShow servicesData={servicesData} />,
    componentName: "LeftRightShow",
    id: "40",
    key: "40",
    remark: "左右圖文組",
    src: "",
  },
];
