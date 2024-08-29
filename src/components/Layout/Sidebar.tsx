import { NavLink, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import toast from "react-hot-toast";

export default function Sidebar() {
  const { compareProducts } = useProducts();
  const navigate = useNavigate();

  const preventHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (compareProducts.length <= 1) {
      e.preventDefault(); // Prevent navigation
      toast.error("You need to select at least 2 products to compare.");
    } else {
      navigate("/products-compare");
    }
  };

  return (
    <div className="bg-slate-200 h-screen pt-24 flex flex-col items-center">
      <ul className="space-y-4 mt-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold ${isActive ? "text-cyan-400" : ""}`
            }
          >
            Product Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products-compare"
            className={({ isActive }) =>
              `text-lg font-semibold ${isActive ? "text-cyan-400" : ""}`
            }
            onClick={preventHandler}
          >
            Compare Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
