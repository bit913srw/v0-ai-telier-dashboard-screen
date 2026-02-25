interface StudioHeaderProps {
  username?: string
}

export function StudioHeader({ username = "Atelier" }: StudioHeaderProps) {
  return (
    <header className="flex flex-col items-center px-4 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
      <h1 className="font-serif text-primary text-2xl md:text-4xl lg:text-5xl font-bold text-center tracking-wide text-balance">
        {username}{"'"}s AI.TELIER STUDIO
      </h1>
      <div className="mt-6 md:mt-8 w-full h-px bg-primary" />
    </header>
  )
}
