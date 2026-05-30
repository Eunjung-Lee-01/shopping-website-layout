import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Clothing",
    description: "우아한 실루엣의 의류 컬렉션",
    productCount: "124 products",
    href: "/clothing",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop&q=80"
  },
  {
    name: "Accessories",
    description: "스타일을 완성하는 액세서리",
    productCount: "89 products",
    href: "/accessories",
    image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=800&h=1000&fit=crop&q=80"
  },
  {
    name: "Lifestyle",
    description: "품격 있는 라이프스타일 아이템",
    productCount: "56 products",
    href: "/lifestyle",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop&q=80"
  },
]

export function CategorySection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Categories
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-medium text-foreground">
              Shop by Category
            </h2>
          </div>
          <Link 
            href="/categories" 
            className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View all categories
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden bg-muted"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-background">
                <span className="text-xs tracking-wider opacity-80">
                  {category.productCount}
                </span>
                <h3 className="mt-1 font-serif text-2xl font-medium">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop now
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
