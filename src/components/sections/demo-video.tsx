import { FormattedMessage } from 'react-intl'

export function DemoVideo() {
  return (
    <section className="py-4">
      <div className="rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 via-cyan-50 to-white p-5 shadow-[0_18px_60px_-40px_rgba(2,132,199,0.55)] md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          <FormattedMessage id="video.title" />
        </h2>
        <p className="mt-2 text-slate-600">
          <FormattedMessage id="video.description" />
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/j081WtTBwgI"
              title="Codex Mobile Chat Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
