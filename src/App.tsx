import { Contact } from '@/components/sections/contact'
import { Features } from '@/components/sections/features'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/sections/navbar'
import { Pricing } from '@/components/sections/pricing'
import { Team } from '@/components/sections/team'
import { features, plans, repoUrl, teamMembers } from '@/data/site-content'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#e8f3ff_0%,#f9fafb_45%,#ffffff_100%)] text-slate-900">
      <Navbar repoUrl={repoUrl} />

      <main id="top" className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Hero repoUrl={repoUrl} />
        <Features features={features} />
        <Pricing plans={plans} />
        <Team members={teamMembers} />
        <Contact repoUrl={repoUrl} />
      </main>

      <Footer repoUrl={repoUrl} />
    </div>
  )
}

export default App
