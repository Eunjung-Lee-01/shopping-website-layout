export type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew: boolean
  isSale: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cashmere Blend Cardigan",
    price: 189000,
    originalPrice: 249000,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&q=80",
    category: "Clothing",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Silk Scarf Collection",
    price: 89000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop&q=80",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Tailored Wool Coat",
    price: 459000,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop&q=80",
    category: "Clothing",
    isNew: false,
    isSale: false,
  },
  {
    id: 4,
    name: "Leather Tote Bag",
    price: 329000,
    originalPrice: 389000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop&q=80",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Linen Relaxed Blazer",
    price: 279000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80",
    category: "Clothing",
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: 219000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=800&fit=crop&q=80",
    category: "Accessories",
    isNew: false,
    isSale: false,
  },
  {
    id: 7,
    name: "Knit Midi Dress",
    price: 199000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
    category: "Clothing",
    isNew: true,
    isSale: false,
  },
  {
    id: 8,
    name: "Gold Pendant Necklace",
    price: 149000,
    originalPrice: 179000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&q=80",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
  {
    id: 9,
    name: "Merino Wool Sweater",
    price: 169000,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&q=80",
    category: "Clothing",
    isNew: true,
    isSale: false,
  },
  {
    id: 10,
    name: "Suede Ankle Boots",
    price: 289000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop&q=80",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
  {
    id: 11,
    name: "Ceramic Table Lamp",
    price: 129000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=800&fit=crop&q=80",
    category: "Lifestyle",
    isNew: true,
    isSale: false,
  },
  {
    id: 12,
    name: "Structured Crossbody Bag",
    price: 249000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
]

export function getNewProducts() {
  return products.filter((product) => product.isNew)
}

export function getNewProductPriceBounds() {
  const newProducts = getNewProducts()
  const prices = newProducts.map((product) => product.price)
  const min = Math.floor(Math.min(...prices) / 10000) * 10000
  const max = Math.ceil(Math.max(...prices) / 10000) * 10000
  return { min, max }
}

export function getNewProductCategories() {
  return [...new Set(getNewProducts().map((product) => product.category))].sort()
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price) + "원"
}
