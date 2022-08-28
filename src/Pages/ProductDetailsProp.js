import Footer from "./Footer";
import "./PagesStyles/ProductDetails.css";

const ProductDetailsProp = ({ product }) => {
  const renderFalse = "";
  return (
    <>
      <div>
        {product && (
          <div className="details">
            <img src={product.productImg} alt="Bench Product" />
            <div className="text-details-div">
              <h3 className="details-head">{product.productText}</h3>
              <br />
              <p className="details-price">$ {product.price}</p>
              <br />
              <br />
              <hr />
              <br />
              <p className="product-text">{product.subProductText}</p>
              <br />
              <p className="product-text">{product.productDescription}</p>
              <br />
              <p className="product-text">
                {product ? product.productContent : renderFalse}
              </p>
              <br />
              <br />
              <div className="button-div">
                {product.property === "SOLD OUT" ? (
                  <button className="sold-out">SOLD OUT</button>
                ) : (
                  <button className="buy-now">BUY NOW</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ProductDetailsProp;
