import LayoutOne from "../../components/Layout/LayoutOne";
import HomePageDnD from "./HomePageDnD";
import HomePageDnDRedux from "./HomePageDnDRedux";
import sliderData from "../../data/slider/sliderOne.json";

export default function DnDHome() {
  return (
    <LayoutOne title="美麗佳人" data={sliderData} className="-style-1">
      <HomePageDnDRedux />
    </LayoutOne>
  );
}
