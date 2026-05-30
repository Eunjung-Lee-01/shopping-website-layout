"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Featured
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-medium text-foreground">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/new"
            className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View all products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
