import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryProductGrid } from "@/components/category-product-grid"
import type { CategoryPageConfig } from "@/lib/categories"
import type { Product } from "@/lib/products"

type CategoryShopPageProps = {
  config: CategoryPageConfig
  products: Product[]
  countLabel: string
}

export function CategoryShopPage({
  config,
  products,
  countLabel,
}: CategoryShopPageProps) {
  return (
    <>
      <Header />
      <main>
        <CategoryHero
          labelEn={config.labelEn}
          title={config.title}
          description={config.description}
        />
        <CategoryProductGrid products={products} countLabel={countLabel} />
      </main>
      <Footer />
    </>
  )
}
