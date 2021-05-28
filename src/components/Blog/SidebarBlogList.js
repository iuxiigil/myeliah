import PostCarThree from "../Post/PostCarThree";

export default function SiderbarBlogList(props) {
  return (
    <div className="blog-sidebar__section -polular-post">
      <h5 className="blog-sidebar__title">熱門文章</h5>
      {props.popularPostData &&
        props.popularPostData
          .slice(0, props.limit)
          .map((post, index) => <PostCarThree key={index} data={post} />)}
    </div>
  );
}
