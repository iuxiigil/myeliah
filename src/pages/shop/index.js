import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginator from "react-hooks-paginator";

// import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import Breadcrumbs from "nextjs-breadcrumbs";

import { getProductbyFilter } from "../../common/productSelect";
import LayoutFour from "../../components/Layout/LayoutFour";
import LayoutOne from "../../components/Layout/LayoutOne";
import productData from "../../data/products.json";
import ShopProducts from "../../components/Shop/ShopProducts";
import ShopHeader from "../../components/Shop/ShopHeader";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import ShopSidebar from "../../components/Shop/ShopSidebar";
import { myseo } from "../../data/SEO/fourCol";
const myseo1 = {
  title: myseo.title,
  description: myseo.description,
  keyword: myseo.keyword,
  openGraph: {
    type: myseo.openGraph.type,
    url: myseo.openGraph.url,
    title: myseo.openGraph.title,
    description: myseo.openGraph.description,
    image: myseo.openGraph.image,
  },
};
export default function () {
  const filterData = useSelector((state) => state.shopReducers.filter);
  const pageLimit = 12;
  const [offset, setOffset] = useState(0);
  const [currentView, setCurrentView] = useState();
  const [currentSort, setCurrentSort] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    let sortedProduct = getProductbyFilter(
      productData,
      currentSort,
      filterData.category,
      filterData.priceRange.from,
      filterData.priceRange.to,
      filterData.brand
    );
    setCurrentData(sortedProduct);
  }, [offset, currentSort, filterData]);
  return (
    <LayoutOne myseo={myseo1}>
      <div className="shop -five-col">
        <div className="container-full-half">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <ShopSidebar />
            </div>
            <div className="col-12 col-md-8 col-lg-9 col-xl-10">
              <ShopHeader
                view={currentView}
                getCurrentSort={setCurrentSort}
                getCurrentView={(view) => setCurrentView(view)}
              />
              {!currentData || currentData.length === 0 ? (
                <h1>No product found</h1>
              ) : (
                <>
                  <ShopProducts
                    gridColClass="col-6 col-sm-6 col-lg-4 col-xl-2"
                    listColClass="col-12 "
                    view={currentView}
                    data={currentData.slice(offset, offset + pageLimit)}
                  />

                  <Paginator
                    pageContainerClass="paginator"
                    totalRecords={currentData.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutOne>
  );
}