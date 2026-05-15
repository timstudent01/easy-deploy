import { Button } from '@/components/ui/button'
import { FormattedMessage } from 'react-intl'

type HeroProps = {
  repoUrl: string
}

export function Hero({ repoUrl }: HeroProps) {
  return (
    <section className="grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
          <FormattedMessage id="hero.badge" />
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          <FormattedMessage id="hero.title" />
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
          <FormattedMessage id="hero.description" />
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            <FormattedMessage id="hero.cta.start" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}
          >
            <FormattedMessage id="hero.cta.repo" />
          </Button>
        </div>
      </div>
      <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_70px_-30px_rgba(15,23,42,0.45)]">
        <div className="rounded-2xl bg-slate-950 p-4">
          <p className="font-mono text-xs text-emerald-300">GET /api/sessions</p>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words rounded-xl bg-slate-900 p-3 text-[11px] leading-relaxed text-slate-100 md:p-4 md:text-xs">{`{
  "sessions": [
    { "id": "019d...", "title": "Build deploy flow" },
    { "id": "01ab...", "title": "UI refactor notes" }
  ]
}`}</pre>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          <FormattedMessage id="hero.api.note" />
        </p>
      </div>
    </section>
  )
}
