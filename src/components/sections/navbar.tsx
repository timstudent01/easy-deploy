import { Button } from '@/components/ui/button'
import type { Locale } from '@/i18n'
import { SquareTerminal } from 'lucide-react'
import { FormattedMessage } from 'react-intl'

type NavbarProps = {
  repoUrl: string
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Navbar({ repoUrl, locale, onLocaleChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          <FormattedMessage id="nav.brand" />
        </a>
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#features" className="hover:text-sky-700"><FormattedMessage id="nav.features" /></a>
          <a href="#pricing" className="hover:text-sky-700"><FormattedMessage id="nav.pricing" /></a>
          <a href="#team" className="hover:text-sky-700"><FormattedMessage id="nav.team" /></a>
          <a href="#contact" className="hover:text-sky-700"><FormattedMessage id="nav.contact" /></a>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant={locale === 'en' ? 'default' : 'outline'} onClick={() => onLocaleChange('en')}>
            <FormattedMessage id="lang.en" />
          </Button>
          <Button size="sm" variant={locale === 'zh' ? 'default' : 'outline'} onClick={() => onLocaleChange('zh')}>
            <FormattedMessage id="lang.zh" />
          </Button>
          <Button onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}>
            <SquareTerminal className="mr-2 h-4 w-4" aria-hidden="true" />
            <FormattedMessage id="nav.github" />
          </Button>
        </div>
      </nav>
    </header>
  )
}
