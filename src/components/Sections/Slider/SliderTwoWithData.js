import data from "../../../data/slider/sliderTwo.json";
import SliderTwo from "./SliderTwo";

export default function SliderTwoWithData({ multilingual }) {
  return (
    <SliderTwo
      data={data}
      className="-style-2"
      showArrows
      multilingual={multilingual}
    />
  );
}
