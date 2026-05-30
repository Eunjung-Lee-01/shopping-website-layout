import type { Metadata } from "next"
import { CategoryShopPage } from "@/components/category-shop-page"
import { categoryPages } from "@/lib/categories"
import { getProductsByCategory } from "@/lib/products"

const config = categoryPages.accessories

export const metadata: Metadata = {
  title: `${config.labelEn.toUpperCase()} | MAISON`,
  description: config.metaDescription,
}

export default function AccessoriesPage() {
  return (
    <CategoryShopPage
      config={config}
      products={getProductsByCategory("Accessories")}
      countLabel="액세서리 상품"
    />
  )
}
