import LayoutOne from "../../components/Layout/LayoutOne";

import { DefaultSource } from "../../common/componentsSets/HomepageSets";

import { useDispatch, useSelector } from "react-redux";
import { getPostDetailBySlug } from "../../store/post/action";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import multilingual from "../../common/multilingual";

let customerDestination = [];
let customerSelect = [];
let layoutScreen;

export default function MainLayout1(props) {
  let key1, key2;
  console.log(props);
  customerDestination = [];
  const targetSelect = props.Data;
  console.log(targetSelect);
  targetSelect &&
    targetSelect.map((comp, _key1) => {
      key1 = { _key1 };
      DefaultSource.map((item, _key2) => {
        key2 = { _key2 };

        if (item.id === comp.id) customerDestination.push(item);
      });
    });

  layoutScreen = customerDestination.map((comp, index) => {
    key1 = index;
    return (comp.comName = React.cloneElement(comp.comName, {
      multilingual: multilingual,
    }));
  });

  return (
    <LayoutOne>
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
