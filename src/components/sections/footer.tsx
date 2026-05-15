type FooterProps = {
  repoUrl: string
}

export function Footer({ repoUrl }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© 2026 codex-mobile-chat. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-sky-700">Back to top</a>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="hover:text-sky-700">
            Repository
          </a>
        </div>
      </div>
    </footer>
  )
}
