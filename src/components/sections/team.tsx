type TeamMember = {
  name: string
  role: string
  bio: string
}

type TeamProps = {
  members: TeamMember[]
}

export function Team({ members }: TeamProps) {
  return (
    <section id="team" className="py-14 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Meet The Team</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {members.map((member) => (
          <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-cyan-300" />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm font-medium text-sky-700">{member.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
