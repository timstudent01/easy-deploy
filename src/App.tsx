import { useMemo, useState } from 'react'
import { Container } from '@/components/container'
import { IntlProvider } from 'react-intl'
import HeroTextBlock from '@/components/HeroTextBlock'
import { Contact } from '@/components/sections/contact'
import { DemoVideo } from '@/components/sections/demo-video'
import { Features } from '@/components/sections/features'
import { Footer } from '@/components/sections/footer'
import { Navbar } from '@/components/sections/navbar'
import { Pricing } from '@/components/sections/pricing'
import { Team } from '@/components/sections/team'
import { features, plans, repoUrl, teamMembers } from '@/data/site-content'
import { type Locale, messages } from '@/i18n'

function App() {
  const initialLocale = useMemo<Locale>(() => {
    return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
  }, [])
  const [locale, setLocale] = useState<Locale>(initialLocale)

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#e8f3ff_0%,#f9fafb_45%,#ffffff_100%)] text-slate-900">
        <Navbar repoUrl={repoUrl} locale={locale} onLocaleChange={setLocale} />
        <main id="top" className="w-full">
          <HeroTextBlock />
          <Container>
            <DemoVideo />
            <Features features={features} />
            <Pricing plans={plans} />
            <Team members={teamMembers} />
            <Contact repoUrl={repoUrl} />
          </Container>
        </main>

        <Footer repoUrl={repoUrl} />
      </div>
    </IntlProvider>
  )
}

export default App
