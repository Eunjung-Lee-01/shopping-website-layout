"use client"

import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "NEW", href: "/new" },
  { name: "CLOTHING", href: "/clothing" },
  { name: "ACCESSORIES", href: "/accessories" },
  { name: "LIFESTYLE", href: "/lifestyle" },
  { name: "SALE", href: "/sale" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-background">
                <nav className="mt-8 flex flex-col gap-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            href="/"
            aria-label="홈으로 이동"
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-4 py-2 font-serif text-2xl font-semibold tracking-wider text-foreground hover:opacity-70 transition-opacity"
          >
            MAISON
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-32 sm:w-48 bg-transparent border-b border-foreground/30 px-2 py-1 text-sm focus:outline-none focus:border-foreground transition-colors"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-foreground"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">검색</span>
              </Button>
            )}
            <Button variant="ghost" size="icon" className="text-foreground">
              <User className="h-5 w-5" />
              <span className="sr-only">계정</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative text-foreground">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                0
              </span>
              <span className="sr-only">장바구니</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
