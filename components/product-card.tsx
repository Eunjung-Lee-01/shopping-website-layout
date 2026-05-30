"use client"

import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { formatPrice, type Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-2 py-1 text-[10px] tracking-wider font-medium bg-foreground text-background">
                NEW
              </span>
            )}
            {product.isSale && (
              <span className="px-2 py-1 text-[10px] tracking-wider font-medium bg-accent text-accent-foreground">
                SALE
              </span>
            )}
          </div>

          <div
            className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9 bg-background/90 hover:bg-background"
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
            >
              <Heart
                className={`h-4 w-4 ${isLiked ? "fill-accent text-accent" : "text-foreground"}`}
              />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9 bg-background/90 hover:bg-background"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <ShoppingBag className="h-4 w-4 text-foreground" />
            </Button>
          </div>

          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <Button
              className="w-full h-10 bg-foreground text-background hover:bg-foreground/90 text-sm font-medium tracking-wide"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <span className="text-xs text-muted-foreground tracking-wide">
          {product.category}
        </span>
        <h3 className="text-sm font-medium text-foreground line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
