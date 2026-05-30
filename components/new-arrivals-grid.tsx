"use client"

import { useMemo, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  formatPrice,
  getNewProductCategories,
  getNewProductPriceBounds,
  getNewProducts,
} from "@/lib/products"

const newProducts = getNewProducts()
const categories = getNewProductCategories()
const { min: priceMin, max: priceMax } = getNewProductPriceBounds()

const categoryLabels: Record<string, string> = {
  Clothing: "의류",
  Accessories: "액세서리",
  Lifestyle: "라이프스타일",
}

function resetFilters(
  setPriceRange: (range: [number, number]) => void,
  setSelectedCategories: (categories: string[]) => void,
) {
  setPriceRange([priceMin, priceMax])
  setSelectedCategories([...categories])
}

export function NewArrivalsGrid() {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    priceMin,
    priceMax,
  ])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...categories,
  ])

  const filteredProducts = useMemo(
    () =>
      newProducts.filter(
        (product) =>
          product.price >= priceRange[0] &&
          product.price <= priceRange[1] &&
          selectedCategories.includes(product.category),
      ),
    [priceRange, selectedCategories],
  )

  const isPriceFiltered =
    priceRange[0] !== priceMin || priceRange[1] !== priceMax
  const isCategoryFiltered = selectedCategories.length !== categories.length
  const isFiltered = isPriceFiltered || isCategoryFiltered

  const toggleCategory = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((item) => item !== category),
    )
  }

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
                {isFiltered && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-foreground/20 text-xs h-8"
                    onClick={() =>
                      resetFilters(setPriceRange, setSelectedCategories)
                    }
                  >
                    초기화
                  </Button>
                )}
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  품목
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => {
                    const count = newProducts.filter(
                      (product) => product.category === category,
                    ).length

                    return (
                      <div
                        key={category}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) =>
                              toggleCategory(category, checked === true)
                            }
                          />
                          <Label
                            htmlFor={`category-${category}`}
                            className="font-normal cursor-pointer"
                          >
                            {categoryLabels[category] ?? category}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {count}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="border-t border-border pt-8">
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
                  조건에 맞는 상품이 없습니다
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  품목 또는 가격 범위를 조정해 보세요.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-foreground/20"
                  onClick={() =>
                    resetFilters(setPriceRange, setSelectedCategories)
                  }
                >
                  필터 초기화
                </Button>
              </div>
            )}

            <p className="mt-12 text-center text-sm text-muted-foreground">
              {isFiltered
                ? `총 ${filteredProducts.length}개의 신상품 (전체 ${newProducts.length}개)`
                : `총 ${newProducts.length}개의 신상품`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
