import Paginator from "react-hooks-paginator";
import BlogContent from "../../components/Blog/BlogContent";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import React, { useState, useEffect } from "react";
import { getPostByKeyword } from "../../common/postSelect";
import { useRouter } from "next/router";

export default function LeftSiderbarBlog({ blogData }) {
  console.log(blogData);
  const router = useRouter();
  const search = router.query.search;
  const pageLimit = 7;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    if (!search || search.length === 0) {
      setCurrentData(blogData);
    } else {
      setCurrentData(getPostByKeyword(blogData, search));
    }
  }, [offset, search]);
  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <BlogContent offset={offset} search={search} data={currentData} />
            <Paginator
              pageContainerClass="paginator"
              totalRecords={currentData.length}
              pageLimit={pageLimit}
              pageNeighbours={2}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="col-12 col-lg-3">
            <BlogSidebar limit={5} popularPostData={blogData} />
          </div>
        </div>
      </div>
    </div>
  );
}
