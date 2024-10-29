import BreadCrumbs from "@/components/BreadCrumbs";
import { BreadCrumbsType, ProductType } from "@/options/types";
import ProductTabs from "./components/ProductTabs";
import ProductCard from "./components/ProductCard";
import { getProduct } from "@/options/api";
import Alert from "@/ui/Alert";

type Params = Promise<{ productName: string }>;

// Metatags
export async function generateMetadata({ params }: { params: Params }) {
  const { productName } = await params;
  const product: ProductType = await getProduct(productName);
  return {
    title: product ? product.title : "Not found",
  };
}

async function ProductPage({ params }: { params: Params }) {
  const { productName } = await params;
  const product: ProductType = await getProduct(productName);

  // Breadcrumbs
  let crumbs: BreadCrumbsType[] = [];
  if (product) {
    product.categories.forEach((el) => {
      crumbs.push({ name: el.name, slug: `/cat/${el.slug}` });
    });
    crumbs.push({ name: product.title, slug: `/product/${product.slug}` });
  }

  if (!product) return <Alert color="danger">Server error</Alert>;

  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>{product.title}</h1>

      <ProductCard good={product} />

      <ProductTabs
        description={product.description}
        features={product.relatedAttrs}
      />
    </div>
  );
}

export default ProductPage;
