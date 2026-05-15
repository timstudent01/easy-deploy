import { FadeInOnView } from '@/components/fade-in-on-view'
import { FormattedMessage } from 'react-intl'

type TeamMember = {
  name: string
  roleId: string
  bioId: string
}

type TeamProps = {
  members: TeamMember[]
}

export function Team({ members }: TeamProps) {
  return (
    <section id="team" className="py-4">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        <FormattedMessage id="team.title" />
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {members.map((member, index) => (
          <FadeInOnView key={member.name} delayMs={index * 110}>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-cyan-300" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-sky-700"><FormattedMessage id={member.roleId} /></p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600"><FormattedMessage id={member.bioId} /></p>
            </article>
          </FadeInOnView>
        ))}
      </div>
    </section>
  )
}
