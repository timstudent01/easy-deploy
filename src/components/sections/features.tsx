type Feature = {
  title: string
  description: string
}

type FeaturesProps = {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-14 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Product Features</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Everything you need to make local Codex workflows accessible, fast, and practical.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
