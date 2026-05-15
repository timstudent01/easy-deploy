import { FormattedMessage } from 'react-intl'

type Feature = {
  titleId: string
  descriptionId: string
}

type FeaturesProps = {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-14 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        <FormattedMessage id="features.title" />
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        <FormattedMessage id="features.description" />
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.titleId} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold">
              <FormattedMessage id={feature.titleId} />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              <FormattedMessage id={feature.descriptionId} />
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
