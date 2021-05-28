// import LayoutFour from "../../components/Layout/LayoutFour";
// import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";

// import { myseo } from "../../data/SEO/about";
// const myseo1 = {
//   title: myseo.title,
//   description: myseo.description,
//   keyword: myseo.keyword,
//   openGraph: {
//     type: myseo.openGraph.type,
//     url: myseo.openGraph.url,
//     title: myseo.openGraph.title,
//     description: myseo.openGraph.description,
//     image: myseo.openGraph.image,
//   },
// };

// import {
//   DefaultDestination,
//   DefaultSource,
// } from "../../common/componentsSets/HomepageSets";

// import { useSelector } from "react-redux";

// let customerDestination = [];
// let customerSelect = [];
// let layoutScreen;

// export default function () {
//   customerSelect = useSelector((state) =>
//     state.homepageReducer.aboutusSelected
//       ? state.homepageReducer.aboutusSelected
//       : DefaultSource
//   );
//   customerDestination = [];
//   customerSelect.map((comp, _key1) => {
//     DefaultSource.map((item, _key2) => {
//       if (item.id === comp.id) customerDestination.push(item);
//     });
//   });

//   layoutScreen = customerDestination.map((comp) => {
//     return comp.comName;
//   });

//   return (
//     <LayoutFour myseo={myseo1}>
//       <Breadcrumb title="關於我們">
//         <BreadcrumbItem name="Home" />
//         <BreadcrumbItem name="關於我們" current />
//       </Breadcrumb>
//       {layoutScreen}
//     </LayoutFour>
//   );
// }

import { DefaultDestination } from "../../common/componentsSets/HomepageSets";

import { useSelector } from "react-redux";

import MainLayout1 from "../homepages/MainLayout1";

let customerSelect = [];

export default function homepage1() {
  customerSelect = useSelector((state) =>
    state.homepageReducer.homeSelected
      ? state.homepageReducer.homeSelected
      : DefaultDestination
  );

  return <MainLayout1 Data={customerSelect.About} Title="關於我們" />;
}
