import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";
import ServiceItem from "../../components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "../../common/utils";
import servicesData from "../../data/pages/services.json";
import { myseo } from "../../data/SEO/service";

export default function services() {
  return (
    <LayoutFour myseo={myseo}>
      <Breadcrumb title="Services">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Services" current />
      </Breadcrumb>
      {servicesData &&
        servicesData.map((item, index) => (
          <ServiceItem
            key={index}
            bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
            smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
            title={item.title}
            order={formatSingleNumber(index + 1)}
            reverse={index % 2 === 1}
          />
        ))}

      <CTAOne />
    </LayoutFour>
  );
}
