import type { Metadata } from "next"
import { CategoryShopPage } from "@/components/category-shop-page"
import { categoryPages } from "@/lib/categories"
import { getProductsByCategory } from "@/lib/products"

const config = categoryPages.clothing

export const metadata: Metadata = {
  title: `${config.labelEn.toUpperCase()} | MAISON`,
  description: config.metaDescription,
}

export default function ClothingPage() {
  return (
    <CategoryShopPage
      config={config}
      products={getProductsByCategory("Clothing")}
      countLabel="의류 상품"
    />
  )
}
