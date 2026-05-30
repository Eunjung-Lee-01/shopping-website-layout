import type { Metadata } from "next"
import { CategoryShopPage } from "@/components/category-shop-page"
import { categoryPages } from "@/lib/categories"
import { getSaleProducts } from "@/lib/products"

const config = categoryPages.sale

export const metadata: Metadata = {
  title: `${config.labelEn.toUpperCase()} | MAISON`,
  description: config.metaDescription,
}

export default function SalePage() {
  return (
    <CategoryShopPage
      config={config}
      products={getSaleProducts()}
      countLabel="세일 상품"
    />
  )
}
