import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewArrivalsGrid } from "@/components/new-arrivals-grid"

export const metadata: Metadata = {
  title: "NEW ARRIVALS | MAISON",
  description: "MAISON의 최신 신상품을 만나보세요.",
}

export default function NewArrivalsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-4 bg-secondary/30 border-b border-border">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              New Arrivals
            </span>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-foreground">
              신상품
            </h1>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              이번 시즌 새롭게 선보이는 MAISON 컬렉션.
              세련된 실루엣과 프리미엄 소재로 완성된 아이템을 만나보세요.
            </p>
          </div>
        </section>
        <NewArrivalsGrid />
      </main>
      <Footer />
    </>
  )
}
