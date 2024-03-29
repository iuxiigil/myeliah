import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";

import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import { formatCurrency } from "../../common/utils";
import { addToCart } from "../../redux/actions/cartActions";
import { removeFromWishlist } from "../../redux/actions/wishlistActions";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { myseo } from "../../data/SEO/cart";
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
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const checkProductInCart = (pid) => {
    return cartState.find((item) => item.id === pid);
  };
  const addToCartHandle = (e, data) => {
    e.preventDefault();
    let productItem = checkProductInCart(data.id);
    if (!productItem) {
      dispatch(addToCart(data));
      return toast.success("Product added to cart !");
    }
  };
  const removeWishlistProduct = (e, pid) => {
    e.preventDefault();
    dispatch(removeFromWishlist(pid));
    return toast.error("Product removed from wishlist");
  };
  return (
    <LayoutFour myseo={myseo1}>
      <Breadcrumb title="常購清單">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="商店" />
        <BreadcrumbItem name="常購清單" current />
      </Breadcrumb>
      <div className="wishlist">
        <div className="container">
          {!wishlistState || wishlistState.length === 0 ? (
            <div className="wishlist__empty">
              <h3>沒有商品</h3>
            </div>
          ) : (
            <div className="wishlist__table">
              <div className="wishlist__table__wrapper">
                <table>
                  <colgroup>
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>商品</th>
                      <th>單價</th>
                      <th>庫存狀態</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistState.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="wishlist-product">
                            <div className="wishlist-product__image">
                              <img src={item.thumbImage[0]} alt={item.name} />
                            </div>
                            <div className="wishlist-product__content">
                              <h5>{item.category}</h5>
                              <Link
                                href={
                                  process.env.PUBLIC_URL +
                                  "/shop/product/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/shop/product/" +
                                  item.slug
                                }
                              >
                                <a>{item.name}</a>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>{formatCurrency(item.price)}</td>
                        <td>{item.quantity > 0 ? "有庫存" : "售完"}</td>
                        <td>
                          <a
                            href={process.env.PUBLIC_URL + "#"}
                            className={`btn -dark ${
                              checkProductInCart(item.id) ? "-disable" : ""
                            }`}
                            onClick={(e) => addToCartHandle(e, item)}
                          >
                            {checkProductInCart(item.id)
                              ? "已加入"
                              : "加入購物車"}
                          </a>
                          <a
                            className="remove-btn"
                            href={process.env.PUBLIC_URL + "#"}
                            onClick={(e) => removeWishlistProduct(e, item.id)}
                          >
                            <i className="fal fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
}
