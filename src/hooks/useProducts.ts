import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface DataType {
  key: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  image: string;
}

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [compareProducts, setCompareProducts] = useState<DataType[]>([]);
  const navigate = useNavigate();
  const [allowComparePage, setAllowComparePage] = useState(false);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("compareProducts") || "[]"
    );
    setCompareProducts(storedProducts);
  }, [compareProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data?.products);
    };
    fetchProducts();
  }, []);

  const addProductToCompareHandler = (product: DataType) => {
    const existingProducts = JSON.parse(
      localStorage.getItem("compareProducts") || "[]"
    );

    if (existingProducts?.length >= 4) {
      toast.error("You can only compare up to 4 products");
      return;
    }

    const updatedProducts = [...existingProducts, product];
    localStorage.setItem("compareProducts", JSON.stringify(updatedProducts));
    setCompareProducts(updatedProducts);

    if (updatedProducts.length > 1) {
      navigate("/products-compare");
      setAllowComparePage(true);
    }
  };

  const removeProduct = (key: number) => {
    const updatedProducts = compareProducts.filter(
      (product) => product.key !== key
    );
    setCompareProducts(updatedProducts);
    localStorage.setItem("compareProducts", JSON.stringify(updatedProducts));
  };

  return {
    products,
    compareProducts,
    removeProduct,
    addProductToCompareHandler,
    allowComparePage,
  };
}
