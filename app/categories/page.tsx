import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { AllProductsGrid } from "@/components/all-products-grid"
import { categoryPages } from "@/lib/categories"

const config = categoryPages.all

export const metadata: Metadata = {
  title: "ALL PRODUCTS | MAISON",
  description: config.metaDescription,
}

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHero
          labelEn={config.labelEn}
          title={config.title}
          description={config.description}
        />
        <AllProductsGrid />
      </main>
      <Footer />
    </>
  )
}
