import { useState } from "react";
import { Button, Modal, Table } from "antd";
import Layout from "../components/Layout";
import ProductsList from "../components/Products/ProductsList";
import useProducts from "../hooks/useProducts";

export default function ComparePage() {
  const [open, setOpen] = useState(false);
  const { compareProducts, removeProduct } = useProducts();

  const columns = compareProducts.map((product, index) => ({
    title: product.title,
    dataIndex: `product_${index}`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, __: any, rowIndex: number) => {
      const attributeMap = {
        0: product.image ? (
          <img src={product.image} alt={product.title} width="100" />
        ) : (
          "-"
        ),
        1: product.price,
        2: product.discountPercentage,
        3: product.brand,
        4: product.category,
        5: (
          <Button onClick={() => removeProduct(product.key)} type="primary">
            Remove
          </Button>
        ),
      } as { [key: number]: string | number | JSX.Element };
      return attributeMap[rowIndex];
    },
  }));

  const dataSource = [
    { key: "image", attribute: "Image" },
    { key: "price", attribute: "Price" },
    { key: "discountPercentage", attribute: "Discount Percentage" },
    { key: "brand", attribute: "Brand" },
    { key: "category", attribute: "Category" },
    { key: "remove", attribute: "Action" },
  ];

  const expandedColumns = [
    {
      title: "Attribute",
      dataIndex: "attribute",
    },
    ...columns,
  ];

  return (
    <Layout>
      <section className="pt-24 px-10 space-y-5 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-cyan-400">
            Compare Products
          </h1>
          <Button onClick={() => setOpen(true)}>Add More</Button>
        </div>
        <Table
          dataSource={dataSource}
          columns={expandedColumns}
          pagination={false}
        />
      </section>
      <Modal
        title="Products"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div className="max-h-[500px] overflow-y-auto">
          <ProductsList />
        </div>
      </Modal>
    </Layout>
  );
}
