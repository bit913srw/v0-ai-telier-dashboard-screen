interface StudioHeaderProps {
  username?: string
}

export function StudioHeader({ username = "Atelier" }: StudioHeaderProps) {
  return (
    <header className="flex flex-col items-center px-4 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
      <div className="flex flex-col items-center gap-0">
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-[0.25em] md:tracking-[0.3em] uppercase"
          style={{
            color: '#D8D4CD',
            textShadow: '1px 1px 1px rgba(255,255,255,0.8), -1px -1px 1px rgba(0,0,0,0.08), 2px 2px 3px rgba(0,0,0,0.06)',
          }}
        >
          AI.TELIER
        </h1>
        <span
          className="text-foreground/70 text-3xl md:text-4xl lg:text-5xl -mt-1 md:-mt-2"
          style={{ fontFamily: 'var(--font-pinyon), cursive' }}
        >
          {username}{"'s"}
        </span>
        <span className="font-serif text-foreground/60 text-base md:text-lg lg:text-xl tracking-[0.4em] md:tracking-[0.5em] uppercase">
          Studio
        </span>
      </div>
      <div className="mt-6 md:mt-8 w-full h-px bg-primary" />
    </header>
  )
}
