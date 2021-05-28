import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { useRouter } from "next/router";

import BlogSidebar from "../../components/Blog/BlogSidebar";
import LayoutFour from "../../components/Layout/LayoutFour";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import blogData from "../../data/blog/blog.json";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import { getPostByKeyword } from "../../common/postSelect";
import BlogContent from "../../components/Blog/BlogContent";
import { myseo } from "../../data/SEO/blog";
import LeftSiderbarBlog from "./LeftSiderbarBlog";
import RightSiderbarBlog from "./RightSiderbarBlog";

export default function index() {
  const router = useRouter();
  const search = router.query.search;
  const pageLimit = 7;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  return (
    <LayoutFour myseo={myseo}>
      <Breadcrumb>
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Blog" current />
      </Breadcrumb>
      <LeftSiderbarBlog offset={offset} search={search} blogData={blogData} />
      {/* <RightSiderbarBlog offset={offset} search={search} blogData={blogData} /> */}
      <InstagramTwo />
    </LayoutFour>
  );
}
