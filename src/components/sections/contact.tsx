import { Button } from '@/components/ui/button'

type ContactProps = {
  repoUrl: string
}

export function Contact({ repoUrl }: ContactProps) {
  return (
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
        <div className="mt-6 flex gap-3">
          <Button size="lg" onClick={() => (window.location.href = 'mailto:hello@codexmobile.chat')}>
            Send Message
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}
          >
            Open GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
