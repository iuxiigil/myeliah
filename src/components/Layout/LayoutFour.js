// import Head from "next/head";
import Meta from "../../components/Layout/modules/Head";
import withScrollFixed from "../../common/withScrollFixed";
import FooterOne from "../Footer/FooterOne";
import HeaderFour from "../Header/HeaderFour";

let ScrollFixedHeader = withScrollFixed(HeaderFour);

export default function LayoutFour(props) {
  return (
    <>
      <Meta myseo={props.myseo}>
        <title>{props.title}</title>
      </Meta>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterOne />
    </>
  );
}
