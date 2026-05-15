import { Button } from '@/components/ui/button'
import { Clock3, Mail, MapPin, Send, SquareTerminal } from 'lucide-react'
import { FormattedMessage } from 'react-intl'

type ContactProps = {
  repoUrl: string
}

export function Contact({ repoUrl }: ContactProps) {
  return (
    <section id="contact" className="py-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          <FormattedMessage id="contact.title" />
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          <FormattedMessage id="contact.desc" />
        </p>
        <div className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" /><FormattedMessage id="contact.email" /></p>
          <p className="inline-flex items-center gap-2"><SquareTerminal className="h-4 w-4" aria-hidden="true" /><FormattedMessage id="contact.github" /></p>
          <p className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" /><FormattedMessage id="contact.response" /></p>
          <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" /><FormattedMessage id="contact.location" /></p>
        </div>
        <div className="mt-6 flex gap-3">
          <Button size="lg" onClick={() => (window.location.href = 'mailto:hello@codexmobile.chat')}>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            <FormattedMessage id="contact.send" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}
          >
            <SquareTerminal className="mr-2 h-4 w-4" aria-hidden="true" />
            <FormattedMessage id="contact.open" />
          </Button>
        </div>
      </div>
    </section>
  )
}
