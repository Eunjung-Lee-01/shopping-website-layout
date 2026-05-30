type CategoryHeroProps = {
  labelEn: string
  title: string
  description: string
}

export function CategoryHero({ labelEn, title, description }: CategoryHeroProps) {
  return (
    <section className="py-20 px-4 bg-secondary/30 border-b border-border">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {labelEn}
        </span>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-foreground">
          {title}
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
