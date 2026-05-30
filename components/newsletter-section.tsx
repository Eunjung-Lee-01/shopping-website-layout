"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-20 px-4 bg-foreground text-background">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs tracking-[0.2em] opacity-70 uppercase">
          Newsletter
        </span>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">
          Stay in touch
        </h2>
        <p className="mt-4 text-base opacity-80 leading-relaxed">
          새로운 컬렉션과 특별한 혜택 소식을 가장 먼저 받아보세요.
        </p>
        
        <form 
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-transparent border-background/30 text-background placeholder:text-background/50 focus:border-background"
          />
          <Button 
            type="submit"
            className="h-12 px-8 bg-background text-foreground hover:bg-background/90 font-medium tracking-wide shrink-0"
          >
            Subscribe
          </Button>
        </form>

        <p className="mt-4 text-xs opacity-60">
          구독 신청 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </section>
  )
}
