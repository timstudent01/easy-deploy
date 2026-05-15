import { Button } from '@/components/ui/button'

type Plan = {
  name: string
  price: string
  detail: string
  points: string[]
  highlight?: boolean
}

type PricingProps = {
  plans: Plan[]
}

export function Pricing({ plans }: PricingProps) {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Pricing</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Start free, then scale with support that matches your usage.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              plan.highlight
                ? 'border-sky-300 bg-sky-50 shadow-[0_12px_40px_-25px_rgba(14,116,144,0.8)]'
                : 'border-slate-200 bg-white'
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
            <p className="mt-2 text-sm text-slate-600">{plan.detail}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <Button className="mt-6 w-full" variant={plan.highlight ? 'default' : 'outline'}>
              Choose {plan.name}
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
