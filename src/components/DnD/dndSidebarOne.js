import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import classNames from "classnames";

import SectionTitleOne from "../Sections/SectionTitle/SectionTitleOne";
import { shop } from "../../common/variables";
import { getDndByCategory } from "../../common/DndSelect";
import {
  setFilterCategory,
  resetFilter,
  updateSourceComponents,
} from "../../redux/actions/homepageActions";
import { DefaultSource } from "../../common/componentsSets/HomepageSets";
export default function DndSidebarOne() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.homepageReducer.filter);
  const SourceData = useSelector((state) => state.homepageReducer.GetSource);

  const DestinationData = useSelector(
    (state) => state.homepageReducer.GetDestination
  );
  // console.log(filterData);
  useEffect(() => {
    dispatch(resetFilter());
  }, []);
  return (
    <div className="shop-sidebar">
      <div className="shop-sidebar__content">
        <div className="shop-sidebar__section -categories">
          <SectionTitleOne className="-medium" spaceBottom={30 / 16 + "em"}>
            類別
          </SectionTitleOne>
          <ul>
            {shop.DNDCATEGORY.map((item, index) => (
              <li
                key={index}
                className={classNames({
                  active: item === filterData.category,
                })}
              >
                <Link href={process.env.PUBLIC_URL + "#"} key={index}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(setFilterCategory(item));

                      dispatch(
                        updateSourceComponents(
                          getDndByCategory(DefaultSource, DestinationData, item)
                        )
                      );
                    }}
                  >
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
