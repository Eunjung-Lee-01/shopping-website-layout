export type CategoryPageConfig = {
  slug: string
  labelEn: string
  title: string
  description: string
  metaDescription: string
}

export const categoryPages: Record<string, CategoryPageConfig> = {
  clothing: {
    slug: "clothing",
    labelEn: "Clothing",
    title: "의류",
    description:
      "우아한 실루엣과 프리미엄 소재로 완성된 MAISON 의류 컬렉션을 만나보세요.",
    metaDescription: "MAISON 의류 컬렉션 - 캐시미어, 울, 린넨 등 프리미엄 소재의 의류",
  },
  accessories: {
    slug: "accessories",
    labelEn: "Accessories",
    title: "액세서리",
    description:
      "스타일을 완성하는 가방, 주얼리, 스카프 등 세련된 액세서리를 확인하세요.",
    metaDescription: "MAISON 액세서리 - 가방, 주얼리, 스카프 등 스타일을 완성하는 아이템",
  },
  lifestyle: {
    slug: "lifestyle",
    labelEn: "Lifestyle",
    title: "라이프스타일",
    description:
      "일상에 품격을 더하는 홈 데코, 조명, 리빙 아이템을 만나보세요.",
    metaDescription: "MAISON 라이프스타일 - 홈 데코, 조명, 리빙 아이템 컬렉션",
  },
  sale: {
    slug: "sale",
    labelEn: "Sale",
    title: "세일",
    description:
      "지금 만나볼 수 있는 특별한 혜택. MAISON의 시즌 세일 아이템을 확인하세요.",
    metaDescription: "MAISON 세일 - 특별 할인가로 만나는 프리미엄 패션 & 라이프스타일",
  },
  all: {
    slug: "categories",
    labelEn: "All Products",
    title: "전체 상품",
    description:
      "MAISON의 모든 컬렉션을 한곳에서 만나보세요. 의류, 액세서리, 라이프스타일 아이템을 확인하세요.",
    metaDescription: "MAISON 전체 상품 - 의류, 액세서리, 라이프스타일 컬렉션",
  },
}
