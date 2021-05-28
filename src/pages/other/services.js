// import LayoutFour from "../../components/Layout/LayoutFour";
// import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
// import CTAOne from "../../components/Sections/CallToAction/CTAOne";

// import servicesData from "../../data/pages/services.json";
// import { myseo } from "../../data/SEO/service";
// import LeftRightShow from "../../components/Sections/LeftRightShow/LeftRightShow";
// export default function services() {
//   return (
//     <LayoutFour myseo={myseo}>
//       <Breadcrumb title="Services">
//         <BreadcrumbItem name="Home" />
//         <BreadcrumbItem name="Services" current />
//       </Breadcrumb>
//       <LeftRightShow servicesData={servicesData} />

//       <CTAOne />
//     </LayoutFour>
//   );
// }
import { DefaultDestination } from "../../common/componentsSets/HomepageSets";
import { useSelector } from "react-redux";
import MainLayout1 from "../homepages/MainLayout1";

let customerSelect = [];

export default function homepage1() {
  customerSelect = useSelector((state) =>
    state.pagesReducer.pagesSelected
      ? state.pagesReducer.pagesSelected
      : DefaultDestination
  );
  console.log(customerSelect.Service);
  return <MainLayout1 Data={customerSelect.Service} Title="服務" />;
}
