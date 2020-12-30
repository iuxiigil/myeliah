import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../../data/introduction/introductionOne.json";
import IntroductionTwo from "../../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../../data/pages/about.json";
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../../data/testimonial/data.json";
import Benefits from "../../components/Other/Benefits";
import IntroductionNine from "../../components/Sections/Introduction/IntroductionNine";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
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
export default function () {
  return (
    <LayoutFour myseo={myseo1}>
      <Breadcrumb title="About us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="About us" current />
      </Breadcrumb>
      <IntroductionOne data={introductionOneData} />
      <IntroductionTwo data={introductionTwoData} style={{ marginBottom: 0 }} />
      <TestimonialOne
        data={testimonialOneData}
        style={{ backgroundColor: "#fff", marginBottom: 0 }}
      />
      <IntroductionNine />
      <Benefits />
      <InstagramTwo />
    </LayoutFour>
  );
}
