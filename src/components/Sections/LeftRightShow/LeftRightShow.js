import LeftRightItem from "./LeftRightItem";
import { formatSingleNumber } from "../../../common/utils";

export default function LeftRightShow(props) {
  return (
    <>
      {props.servicesData.map((item, index) => (
        <LeftRightItem
          key={index}
          bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
          smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
          title={item.title}
          order={formatSingleNumber(index + 1)}
          reverse={index % 2 === 1}
          data={item}
        />
      ))}
    </>
  );
}
