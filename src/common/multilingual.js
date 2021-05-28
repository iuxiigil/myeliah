import { useIntl } from "react-intl";

const multilingual = (lanid) => {
  const intl = useIntl();

  return intl.formatMessage({
    id: lanid,
  });
};
export default multilingual;
