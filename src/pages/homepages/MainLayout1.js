import LayoutOne from "../../components/Layout/LayoutOne";

import { DefaultSource } from "../../common/componentsSets/HomepageSets";

import { useDispatch, useSelector } from "react-redux";
import { getPostDetailBySlug } from "../../store/post/action";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";

let customerDestination = [];
let customerSelect = [];
let layoutScreen;

export default function MainLayout1(props) {
  customerDestination = [];
  const targetSelect = props.Data;

  targetSelect.map((comp, _key1) => {
    DefaultSource.map((item, _key2) => {
      if (item.id === comp.id) customerDestination.push(item);
    });
  });

  layoutScreen = customerDestination.map((comp) => {
    return comp.comName;
  });

  return (
    <LayoutOne title="美麗佳人-1">
      <Breadcrumb>
        <BreadcrumbItem name="Home" />
        {props.Title !== "首頁" && (
          <BreadcrumbItem name={props.Title} current />
        )}
      </Breadcrumb>
      {layoutScreen}
    </LayoutOne>
  );
}
