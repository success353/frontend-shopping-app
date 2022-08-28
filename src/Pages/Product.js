// import modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// import all static Files
import "./PagesStyles/Product.css";

const Products = () => {
  const title = "OUR PRODUCTS";
  document.title = title;
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://bench-api-backend.herokuapp.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  });
  return (
    <>
      <div className="Products">
        <header>OUR PRODUCTS</header>
      </div>
      <hr className="space-line" />
      <div className="productsDisplay">
        {products &&
          products.map((product) => (
            <div key={product.id} className="productCard">
              <div className="img-div">
                <Link to={`${product.id}`}>
                  <img src={product.productImg} alt="Shopping" />
                </Link>
                <div className="text-div">{product.property}</div>
              </div>
              <p className="productText">{product.productText}</p>
              <p className="productPrice">${product.price}</p>
              <p className="productReviews">{product.reviews}</p>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
