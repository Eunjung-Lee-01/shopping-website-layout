"use client"

import { useMemo, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { formatPrice, getProductPriceBounds, type Product } from "@/lib/products"

type CategoryProductGridProps = {
  products: Product[]
  countLabel: string
}

export function CategoryProductGrid({
  products,
  countLabel,
}: CategoryProductGridProps) {
  const { min: priceMin, max: priceMax } = getProductPriceBounds(products)
  const [priceRange, setPriceRange] = useState<[number, number]>([
    priceMin,
    priceMax,
  ])

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1],
      ),
    [products, priceRange],
  )

  const isPriceFiltered =
    priceRange[0] !== priceMin || priceRange[1] !== priceMax

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 p-6 border border-border bg-secondary/20 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Filter
                  </span>
                  <h2 className="mt-1 font-serif text-xl font-medium text-foreground">
                    필터
                  </h2>
                </div>
                {isPriceFiltered && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-foreground/20 text-xs h-8"
                    onClick={() => setPriceRange([priceMin, priceMax])}
                  >
                    초기화
                  </Button>
                )}
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  가격대
                </h3>
                <div className="flex items-center justify-between text-sm font-medium text-foreground mb-4">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span className="text-muted-foreground">—</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
                <Slider
                  min={priceMin}
                  max={priceMax}
                  step={10000}
                  value={priceRange}
                  onValueChange={(value) =>
                    setPriceRange(value as [number, number])
                  }
                  className="py-2"
                />
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-border">
                <p className="font-serif text-xl text-foreground">
                  해당 가격대의 상품이 없습니다
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  가격 범위를 넓혀 다시 검색해 보세요.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-foreground/20"
                  onClick={() => setPriceRange([priceMin, priceMax])}
                >
                  필터 초기화
                </Button>
              </div>
            )}

            <p className="mt-12 text-center text-sm text-muted-foreground">
              {isPriceFiltered
                ? `총 ${filteredProducts.length}개의 ${countLabel} (전체 ${products.length}개)`
                : `총 ${products.length}개의 ${countLabel}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
