import { useMemo } from "react";
import { Button, Table } from "antd";
import useProducts from "../../hooks/useProducts";

export interface DataType {
  key: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  image: string;
}

export default function ProductsList() {
  const { products, compareProducts, addProductToCompareHandler } =
    useProducts();

  const isAttributeCompared = (key: number, attribute: keyof DataType) => {
    return compareProducts.some(
      (product) => product.key === key && product[attribute] !== undefined
    );
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: (text: string, product: DataType) => (
        <span
          className={`${
            isAttributeCompared(product.key, "title")
              ? "font-bold text-blue-400"
              : ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text: string, product: DataType) => (
        <span
          className={`${
            isAttributeCompared(product.key, "description")
              ? "font-bold text-blue-400"
              : ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text: number, product: DataType) => (
        <span
          className={`${
            isAttributeCompared(product.key, "price")
              ? "font-bold text-blue-400"
              : ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      render: (text: number, product: DataType) => (
        <span
          className={`${
            isAttributeCompared(product.key, "discountPercentage")
              ? "font-bold text-blue-400"
              : ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      render: (text: string, product: DataType) => (
        <span
          className={`${
            isAttributeCompared(product.key, "brand")
              ? "font-bold text-blue-400"
              : ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (text: string, product: DataType) => (
        <span
          className={`${
            isAttributeCompared(product.key, "category")
              ? "font-bold text-blue-400"
              : ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image: string, product: DataType) => (
        <img
          src={image}
          alt="product"
          width="50"
          className={`${
            isAttributeCompared(product.key, "image")
              ? "border-2 border-blue-400"
              : ""
          }`}
        />
      ),
    },
    {
      title: "Compare Products",
      dataIndex: "compare",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, product: DataType) => (
        <Button
          onClick={() => addProductToCompareHandler(product)}
          disabled={compareProducts.some(
            (compareProduct) => compareProduct.key === product.key
          )}
        >
          Compare
        </Button>
      ),
    },
  ];

  const data: DataType[] = useMemo(() => {
    return products.map((product) => ({
      key: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      brand: product.brand,
      category: product.category,
      image: product.thumbnail,
    }));
  }, [products]);

  return <Table dataSource={data} columns={columns} />;
}
