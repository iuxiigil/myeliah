import { DefaultDestination } from "../../common/componentsSets/HomepageSets";
import { useDispatch, useSelector } from "react-redux";
import MainLayout1 from "./MainLayout1";
import { payload } from "../../common/payload/payload";
import pagesActions from "../../redux/pages/pagesActions";
const { loadlist, toggleModal, crud } = pagesActions;

let customerSelect = [];

export default function homepage1() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadlist(payload));
  }, [dispatch]);

  customerSelect = useSelector((state) =>
    state.pagesReducer.pagesSelected
      ? state.pagesReducer.pagesSelected
      : DefaultDestination
  );

  return <MainLayout1 Data={customerSelect.Home} Title="Home" />;
}
