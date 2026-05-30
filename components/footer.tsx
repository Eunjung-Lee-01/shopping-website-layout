import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

const footerNavigation = {
  shop: [
    { name: "New Arrivals", href: "/new" },
    { name: "Clothing", href: "/clothing" },
    { name: "Accessories", href: "/accessories" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Sale", href: "/sale" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Stores", href: "/stores" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl font-semibold tracking-wider text-foreground">
                MAISON
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              당신의 스타일을 완성하는 프리미엄 패션 & 라이프스타일 브랜드
            </p>
            <div className="mt-6 flex gap-4">
              <Link 
                href="https://instagram.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.shop.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2024 MAISON. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
