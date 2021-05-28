import data from "../../../data/slider/sliderFive.json";
import SliderOne from "./SliderOne";

export default function SliderOneWithData({ multilingual }) {
  return (
    <SliderOne
      className="-style-2"
      data={data}
      showArrows
      multilingual={multilingual}
    />
  );
}
