import { Button } from '@/components/ui/button'
import { FormattedMessage } from 'react-intl'

type Plan = {
  nameId: string
  priceId: string
  detailId: string
  pointIds: string[]
  highlight?: boolean
}

type PricingProps = {
  plans: Plan[]
}

export function Pricing({ plans }: PricingProps) {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        <FormattedMessage id="pricing.title" />
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        <FormattedMessage id="pricing.description" />
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.nameId}
            className={`rounded-2xl border p-6 ${
              plan.highlight
                ? 'border-sky-300 bg-sky-50 shadow-[0_12px_40px_-25px_rgba(14,116,144,0.8)]'
                : 'border-slate-200 bg-white'
            }`}
          >
            <h3 className="text-xl font-semibold"><FormattedMessage id={plan.nameId} /></h3>
            <p className="mt-2 text-3xl font-semibold"><FormattedMessage id={plan.priceId} /></p>
            <p className="mt-2 text-sm text-slate-600"><FormattedMessage id={plan.detailId} /></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.pointIds.map((pointId) => (
                <li key={pointId}>• <FormattedMessage id={pointId} /></li>
              ))}
            </ul>
            <Button className="mt-6 w-full" variant={plan.highlight ? 'default' : 'outline'}>
              <FormattedMessage id="pricing.choose" values={{ name: <FormattedMessage id={plan.nameId} /> }} />
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
