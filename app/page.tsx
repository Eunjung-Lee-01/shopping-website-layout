import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { ProductGrid } from "@/components/product-grid"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
