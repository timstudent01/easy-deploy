import { Button } from '@/components/ui/button'

type NavbarProps = {
  repoUrl: string
}

export function Navbar({ repoUrl }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          codex-mobile-chat
        </a>
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#features" className="hover:text-sky-700">Features</a>
          <a href="#pricing" className="hover:text-sky-700">Pricing</a>
          <a href="#team" className="hover:text-sky-700">Team</a>
          <a href="#contact" className="hover:text-sky-700">Contact</a>
        </div>
        <Button onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}>
          GitHub
        </Button>
      </nav>
    </header>
  )
}
