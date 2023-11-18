import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productServices";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <div>
        <h1>Produtc List</h1>
      </div>
      <div>
        <div>{JSON.stringify(products)}</div>
      </div>
      <br />
      <div>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </>
  );
};

export default ProductPage;
