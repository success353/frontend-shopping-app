// import Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

// import all static Files
import ProductDetailsProp from "./ProductDetailsProp";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://bench-api-backend.herokuapp.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  });
  return (
    <div className="product-details">
      <div className="product-details-display">
        <ProductDetailsProp product={product} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
