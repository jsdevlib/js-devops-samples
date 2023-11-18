import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>

      <div>
        <Link to="/products">
          <button>List Products</button>
        </Link>
        <Link to="/orders">
          <button>List Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
