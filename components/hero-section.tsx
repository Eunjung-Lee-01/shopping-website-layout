"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-background">
      {/* Main heading */}
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight text-balance">
          Timeless elegance
          <br />
          meets modern style
        </h1>
        
        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          당신만의 스타일을 발견하세요. 세련된 디자인과 
          품격 있는 퀄리티로 일상을 특별하게 만들어 드립니다.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wide"
          >
            <Link href="/new">
              NEW ARRIVALS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="h-12 px-8 border-foreground/20 hover:bg-foreground/5 font-medium tracking-wide"
          >
            <Link href="/collection">
              EXPLORE COLLECTION
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-xs tracking-widest text-muted-foreground uppercase">
          Scroll to discover
        </span>
        <div className="w-px h-12 bg-border" />
      </div>

      {/* Side text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          2024 Spring Collection
        </span>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Premium Quality
        </span>
      </div>
    </section>
  )
}
