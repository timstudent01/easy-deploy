import {
  FolderOpen,
  Image,
  MessageSquare,
  PlusCircle,
  Server,
  Waves,
} from 'lucide-react'
import { FormattedMessage } from 'react-intl'

type Feature = {
  titleId: string
  descriptionId: string
}

type FeaturesProps = {
  features: Feature[]
}

const featureIcons = [
  MessageSquare,
  FolderOpen,
  Waves,
  PlusCircle,
  Image,
  Server,
]

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-4">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        <FormattedMessage id="features.title" />
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        <FormattedMessage id="features.description" />
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = featureIcons[index % featureIcons.length]

          return (
            <article key={feature.titleId} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">
                <FormattedMessage id={feature.titleId} />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <FormattedMessage id={feature.descriptionId} />
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
