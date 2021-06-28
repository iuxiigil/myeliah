import LayoutOne from "../../components/Layout/LayoutOne";

import { DefaultSource } from "../../common/componentsSets/HomepageSets";

import multilingual from "../../common/multilingual";
let layoutScreen;

export default function MainLayout1(props) {
  let key1, key2;

  let customerDestination = [];

  props.Data &&
    props.Data.map((comp, index) => {
      key1 = { index };
      DefaultSource.map((item, index) => {
        key2 = { index };

        if (item.id === comp.id) {
          item.comName = React.cloneElement(item.comName, {
            multilingual: multilingual,
          });
          customerDestination.push(item);
        }
      });
    });

  layoutScreen = customerDestination.map((comp, index) => {
    key1 = index;
    return comp.comName;
  });

  return <LayoutOne myseo={props.myseo}>{layoutScreen}</LayoutOne>;
}
