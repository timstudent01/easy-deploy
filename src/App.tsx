import { Button } from '@/components/ui/button'

function App() {
  const features = [
    {
      title: 'Mobile-First Chat UI',
      description:
        'A clean ChatGPT-like experience optimized for phone screens, while still feeling natural on desktop.',
    },
    {
      title: 'Local Session Browser',
      description:
        'Reads from ~/.codex/session_index.jsonl so you can continue any existing Codex thread instantly.',
    },
    {
      title: 'Real-Time Streaming',
      description:
        'NDJSON streaming endpoint keeps the conversation feeling live with status, chunks, and completion events.',
    },
    {
      title: 'New Session from UI',
      description:
        'Create fresh sessions from the browser without dropping to terminal commands.',
    },
    {
      title: 'Image Upload Support',
      description:
        'Share screenshots and reference images directly in chat with in-thread preview.',
    },
    {
      title: 'Built for Self-Hosted Workflows',
      description:
        'Bun + Hono stack with straightforward deployment options for private network access.',
    },
  ]

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      detail: 'For personal use and local experimentation.',
      points: ['1 local instance', 'Basic chat history', 'Community support'],
    },
    {
      name: 'Pro',
      price: '$12/mo',
      detail: 'For solo builders and power users.',
      points: [
        'Unlimited sessions',
        'Advanced stream monitoring',
        'Priority issue response',
      ],
      highlight: true,
    },
    {
      name: 'Team',
      price: '$39/mo',
      detail: 'For small teams running shared workflows.',
      points: [
        'Multi-user workspace guidelines',
        'Deployment playbooks',
        'Migration and onboarding support',
      ],
    },
  ]

  const team = [
    {
      name: 'Tim Chen',
      role: 'Founder & Product Engineer',
      bio: 'Focuses on practical AI tooling that shortens feedback loops for local development teams.',
    },
    {
      name: 'Avery Lin',
      role: 'Frontend Experience',
      bio: 'Designs mobile-first interfaces that stay fast, clear, and easy to adopt.',
    },
    {
      name: 'Noah Wu',
      role: 'Infrastructure',
      bio: 'Builds reliable self-hosted deployment paths and secure networking guidance.',
    },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#e8f3ff_0%,#f9fafb_45%,#ffffff_100%)] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#top" className="text-lg font-semibold tracking-tight">
            codex-mobile-chat
          </a>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#features" className="hover:text-sky-700">
              Features
            </a>
            <a href="#pricing" className="hover:text-sky-700">
              Pricing
            </a>
            <a href="#team" className="hover:text-sky-700">
              Team
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
          </div>
          <Button
            onClick={() =>
              window.open('https://github.com/timstudent01/codex-mobile-chat', '_blank', 'noopener,noreferrer')
            }
          >
            GitHub
          </Button>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <section className="grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              Bun + Hono + Codex CLI
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Bring Your Local Codex Sessions to Any Device
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              codex-mobile-chat is a mobile-friendly interface for browsing,
              continuing, and creating Codex sessions through a fast local web app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open('https://github.com/timstudent01/codex-mobile-chat', '_blank', 'noopener,noreferrer')
                }
              >
                View Repository
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_70px_-30px_rgba(15,23,42,0.45)]">
            <div className="rounded-2xl bg-slate-950 p-4">
              <p className="font-mono text-xs text-emerald-300">GET /api/sessions</p>
              <pre className="mt-3 overflow-auto rounded-xl bg-slate-900 p-4 text-xs leading-relaxed text-slate-100">
                {`{
  "sessions": [
    { "id": "019d...", "title": "Build deploy flow" },
    { "id": "01ab...", "title": "UI refactor notes" }
  ]
}`}
              </pre>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Lightweight APIs and streaming responses make UI updates feel immediate.
            </p>
          </div>
        </section>

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

        <section id="team" className="py-14 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Meet The Team</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-cyan-300" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-sky-700">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-14 md:py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact Us</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Want a demo, migration support, or custom implementation advice? Reach us directly.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <p>Email: hello@codexmobile.chat</p>
              <p>GitHub: github.com/timstudent01/codex-mobile-chat</p>
              <p>Response Time: within 24 hours</p>
              <p>Location: Remote-first, APAC friendly</p>
            </div>
            <div className="mt-6">
              <Button size="lg" onClick={() => (window.location.href = 'mailto:hello@codexmobile.chat')}>
                Send Message
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 codex-mobile-chat. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#top" className="hover:text-sky-700">
              Back to top
            </a>
            <a href="https://github.com/timstudent01/codex-mobile-chat" target="_blank" rel="noreferrer" className="hover:text-sky-700">
              Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
