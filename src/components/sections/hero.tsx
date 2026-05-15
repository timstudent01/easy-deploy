import { Button } from '@/components/ui/button'
import { FormattedMessage } from 'react-intl'

type HeroProps = {
  repoUrl: string
}

export function Hero({ repoUrl }: HeroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_70px_-30px_rgba(15,23,42,0.45)] md:p-12">
        <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
          <FormattedMessage id="hero.badge" />
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          <FormattedMessage id="hero.title" />
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          <FormattedMessage id="hero.description" />
        </p>
        <p className="mt-4 text-sm text-slate-500">
          <FormattedMessage id="hero.api.note" />
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
    </section>
  )
}
