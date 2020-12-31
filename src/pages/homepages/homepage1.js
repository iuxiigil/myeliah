import LayoutOne from "../../components/Layout/LayoutOne";

import {
  DefaultDestination,
  DefaultSource,
} from "../../common/componentsSets/HomepageSets";

import { useSelector } from "react-redux";

let customerDestination = [];
let customerSelect = [];
let layoutScreen;

export default function homepage1() {
  customerSelect = useSelector((state) =>
    state.homepageReducer.GetDestination
      ? state.homepageReducer.GetDestination
      : DefaultDestination
  );
  customerDestination = [];
  customerSelect.map((comp, _key1) => {
    DefaultSource.map((item, _key2) => {
      if (item.id === comp.id) customerDestination.push(item);
    });
  });

  layoutScreen = customerDestination.map((comp) => {
    return comp.comName;
  });

  return (
    <LayoutOne title="美麗佳人" className="-style-1">
      {layoutScreen}
    </LayoutOne>
  );
}
