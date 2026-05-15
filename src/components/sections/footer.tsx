import { SquareTerminal } from 'lucide-react'
import { FormattedMessage } from 'react-intl'

type FooterProps = {
  repoUrl: string
}

export function Footer({ repoUrl }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p><FormattedMessage id="footer.copyright" /></p>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-sky-700"><FormattedMessage id="footer.top" /></a>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-sky-700">
            <SquareTerminal className="h-4 w-4" aria-hidden="true" />
            <FormattedMessage id="footer.repo" />
          </a>
        </div>
      </div>
    </footer>
  )
}
