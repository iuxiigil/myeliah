// import { DefaultDestination } from "../../common/componentsSets/HomepageSets";
// import { useDispatch, useSelector } from "react-redux";
import MainLayout1 from "./MainLayout1";
// import { payload } from "../../common/payload/payload";
// import pagesActions from "../../redux/pages/pagesActions";
import ResetComponents from "../../common/ResetComponents";
// const { loadlist, toggleModal, crud } = pagesActions;

// let customerSelect = [];
import { myseo } from "../../data/SEO/blog";

export default function homepage1() {
  return <MainLayout1 Data={ResetComponents("Home")} myseo={myseo} />;
}
