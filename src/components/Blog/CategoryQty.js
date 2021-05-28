import { getCategoryQuantity } from "../../common/postSelect";
import { blog } from "../../common/variables";
import blogData from "../../data/blog/blog.json";
import Link from "next/link";

export default function CategoryQty() {
  return (
    <div className="blog-sidebar__section -categories">
      <h5 className="blog-sidebar__title">分類</h5>
      <ul>
        {blog.CATEGORIES.map((item, index) => (
          <li key={index}>
            <Link
              href={process.env.PUBLIC_URL + "#"}
              as={process.env.PUBLIC_URL + "#"}
            >
              <a>
                {item}
                <span>{getCategoryQuantity(blogData, item)}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
