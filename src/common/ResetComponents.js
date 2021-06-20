import { DefaultDestination } from "./componentsSets/HomepageSets";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { payload } from "./payload/payload";
import pagesActions from "../redux/pages/pagesActions";
const { loadlist } = pagesActions;

let customerSelect = [];

export default function resetComponents(pageName) {
  // return <GenPage pageName="Home" />;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadlist(payload));
  }, [dispatch]);

  customerSelect = useSelector((state) =>
    state.pagesReducer.pagesSelected
      ? state.pagesReducer.pagesSelected
      : DefaultDestination
  );
  console.log(pageName);
  switch (pageName) {
    case "Home":
      return customerSelect.Home;
    case "Service":
      return customerSelect.Service;
    case "About":
      return customerSelect.About;
  }
}
