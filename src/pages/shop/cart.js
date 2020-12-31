import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import LayoutFour from "../../components/Layout/LayoutFour";
import Quantity from "../../components/Control/Quantity";
import Button from "../../components/Control/Button";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import { formatCurrency } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";
import {
  removeFromCart,
  removeAllFromCart,
  increaseQuantityCart,
  decreaseQuantityCart,
} from "../../redux/actions/cartActions";
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
  const { register, handleSubmit, watch, errors } = useForm();
  const cartState = useSelector((state) => state.cartReducer);
  const onSubmit = (data) => console.log(data);
  const removeAllProduct = (e) => {
    e.preventDefault();
    dispatch(removeAllFromCart());
    return toast.error("All product removed from cart");
  };
  const removeProduct = (e, cartId) => {
    e.preventDefault();
    dispatch(removeFromCart(cartId));
    return toast.error("Product removed from cart");
  };
  return (
    <LayoutFour myseo={myseo1}>
      <Breadcrumb title="Shopping cart">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="商店" />
        <BreadcrumbItem name="購物車" current />
      </Breadcrumb>
      <div className="cart">
        <div className="container">
          {!cartState || cartState.length === 0 ? (
            <div className="cart__empty">
              <h3>空的購物車</h3>
              <Button
                color="dark"
                action={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}
                content="購物去"
              />
            </div>
          ) : (
            <>
              <div className="cart__table">
                <div className="cart__table__wrapper">
                  <table>
                    <colgroup>
                      <col style={{ width: "40%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "17%" }} />
                      <col style={{ width: "9%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>商品</th>
                        <th>單價</th>
                        <th>數量</th>
                        <th>小計</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartState.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="cart-product">
                              <div className="cart-product__image">
                                <img src={item.thumbImage[0]} alt={item.name} />
                              </div>
                              <div className="cart-product__content">
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
                          <td>
                            <Quantity
                              defaultQuantity={item.cartQuantity}
                              onIncrease={() =>
                                dispatch(increaseQuantityCart(item.cartId))
                              }
                              onDecrease={() =>
                                dispatch(decreaseQuantityCart(item.cartId))
                              }
                            />
                          </td>
                          <td>
                            {formatCurrency(item.price * item.cartQuantity)}
                          </td>
                          <td>
                            <a
                              href={process.env.PUBLIC_URL + "#"}
                              onClick={(e) => removeProduct(e, item.cartId)}
                            >
                              <i className="fal fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart__table__footer">
                  <Link href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}>
                    <a>
                      <i className="fal fa-long-arrow-left"></i>
                      繼續購物
                    </a>
                  </Link>

                  <Link href="#">
                    <a onClick={(e) => removeAllProduct(e)}>
                      <i className="fal fa-trash"></i>
                      清空購物車
                    </a>
                  </Link>
                </div>
              </div>
              <div className="cart__total">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <div className="cart__total__discount">
                      <p>優惠券.</p>
                      <div className="input-validator">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input
                            type="text"
                            name="discountCode"
                            placeholder="優惠代碼"
                            ref={register({ required: true })}
                          />
                          <button className="btn -dark"> Check </button>
                        </form>
                        {errors.discountCode && (
                          <span className="input-error">請輸入優惠代碼</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="cart__total__content">
                      <h3>合計</h3>
                      <table>
                        <tbody>
                          <tr>
                            <th>小計</th>
                            <td>{calculateTotalPrice(cartState, true)}</td>
                          </tr>
                          <tr>
                            <th>總計</th>
                            <td className="final-price">
                              {calculateTotalPrice(cartState, true)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <Button
                        height={45 / 14 + "em"}
                        width="100%"
                        action={process.env.PUBLIC_URL + "/shop/checkout"}
                        color="dark"
                        content="結帳"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
}
