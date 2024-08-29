import Layout from "../components/Layout";
import ProductsList from "../components/Products/ProductsList";

export default function ProductDetailsPage() {
  return (
    <Layout>
      <section className="pt-24 px-10 space-y-5 py-10">
        <h1 className="text-lg font-semibold text-cyan-400">
          Product Details Page
        </h1>
        <ProductsList />
      </section>
    </Layout>
  );
}
