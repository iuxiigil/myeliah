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
//     state.pagesReducer.aboutusSelected
//       ? state.pagesReducer.aboutusSelected
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

// import { DefaultDestination } from "../../common/componentsSets/HomepageSets";

// import { useSelector } from "react-redux";

import MainLayout1 from "../../../homepages/MainLayout1";
import ResetComponents from "../../../../common/ResetComponents";
import { useRouter } from "next/router";

// let customerSelect = [];

export default function about() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return <MainLayout1 Data={ResetComponents("About")} Title="關於我們" />;
}
