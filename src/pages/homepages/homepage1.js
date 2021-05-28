import { DefaultDestination } from "../../common/componentsSets/HomepageSets";
import { useSelector } from "react-redux";
import MainLayout1 from "./MainLayout1";

let customerSelect = [];

export default function homepage1() {
  customerSelect = useSelector((state) =>
    state.homepageReducer.homeSelected
      ? state.homepageReducer.homeSelected
      : DefaultDestination
  );

  return <MainLayout1 Data={customerSelect.Home} Title="首頁" />;
}
