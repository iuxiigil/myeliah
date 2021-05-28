import { SubscribeEmailCom } from "./SubscribeEmail";
import ShareSocial from "./ShareSocial";
import CategoryQty from "./CategoryQty";
import SearchBlog from "./SearchBlog";
import SiderbarBlogList from "./SidebarBlogList";

export default function BlogSidebar({ limit, popularPostData }) {
  const onNewsSubmit = (data) => console.log(data);
  return (
    <div className="blog-sidebar">
      <SearchBlog />
      <CategoryQty />
      <ShareSocial />
      <SiderbarBlogList popularPostData={popularPostData} limit={limit} />
      <SubscribeEmailCom />
    </div>
  );
}
