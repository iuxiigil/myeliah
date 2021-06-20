import { DefaultDestination } from "./componentsSets/HomepageSets";
import { useDispatch, useSelector } from "react-redux";
import MainLayout1 from "../pages/homepages/";
import { payload } from "./payload/payload";
import pagesActions from "../redux/pages/pagesActions";
const { loadlist, toggleModal, crud } = pagesActions;

let customerSelect = [];

export default function GenPage({ pageName }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadlist(payload));
  }, [dispatch]);

  customerSelect = useSelector((state) =>
    state.pagesReducer.pagesSelected
      ? state.pagesReducer.pagesSelected
      : DefaultDestination
  );

  return <MainLayout1 Data={customerSelect.$`{pageName}`} Title="Home" />;
}
