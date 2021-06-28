import Button from "./Button";
import classNames from "classnames";
import multilingual from "../../common/multilingual";

export default function AddToCart({ onClick, className }) {
  return (
    <div className={`add-to-cart ${classNames(className)}`} onClick={onClick}>
      <Button
        height="3.85em"
        width="3.85em"
        color="red"
        className="-round"
        action="#"
        content={<i className="fas fa-shopping-bag"></i>}
      />

      <h5>{multilingual("product.addtocart")}</h5>
    </div>
  );
}
