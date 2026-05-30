import type { Metadata } from "next"
import { CategoryShopPage } from "@/components/category-shop-page"
import { categoryPages } from "@/lib/categories"
import { getProductsByCategory } from "@/lib/products"

const config = categoryPages.lifestyle

export const metadata: Metadata = {
  title: `${config.labelEn.toUpperCase()} | MAISON`,
  description: config.metaDescription,
}

export default function LifestylePage() {
  return (
    <CategoryShopPage
      config={config}
      products={getProductsByCategory("Lifestyle")}
      countLabel="라이프스타일 상품"
    />
  )
}
