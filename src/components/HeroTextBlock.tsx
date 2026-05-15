import React from 'react'
import type { Locale } from '@/i18n'

type HeroTextBlockProps = {
  locale: Locale
}

const copy: Record<
  Locale,
  { line1: string; emphasis: string; line2BeforeAI: string; line2AfterAI: string; subtitle: string }
> = {
  zh: {
    line1: '隨時隨地，',
    emphasis: '掌控',
    line2BeforeAI: '你的 ',
    line2AfterAI: ' 開發助手',
    subtitle: '用手機與本機 Codex CLI 即時對話，讓開發更自由，更高效。',
  },
  en: {
    line1: 'Anywhere, anytime,',
    emphasis: 'take control',
    line2BeforeAI: 'of your ',
    line2AfterAI: ' development copilot',
    subtitle:
      'Chat with your local Codex CLI from your phone in real time, and build with more freedom and speed.',
  },
}

const HeroTextBlock: React.FC<HeroTextBlockProps> = ({ locale }) => {
  const text = copy[locale]

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[760px] px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <h1 className="font-black leading-[1.08] tracking-[-0.02em] text-[#071B4D] text-[38px] sm:text-[44px] md:text-[52px] lg:text-[72px]">
          <span>{text.line1}</span>
          <span className="relative ml-2 inline-block text-[#1267FF]">
            {text.emphasis}
            <span className="pointer-events-none absolute -right-3 top-1 hidden sm:block">
              <span className="absolute h-[2px] w-4 rotate-[20deg] rounded-full bg-[#1267FF]" />
              <span className="absolute left-1 top-2 h-[2px] w-3 rotate-[28deg] rounded-full bg-[#1267FF]" />
              <span className="absolute left-2 top-4 h-[2px] w-2 rotate-[35deg] rounded-full bg-[#1267FF]" />
            </span>
          </span>
          <br />
          <span>{text.line2BeforeAI}</span>
          <span className="relative inline-block text-[#1267FF]">
            AI
            <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-[999px] bg-[#1267FF]/30" />
            <span className="absolute -bottom-[3px] left-0 h-[3px] w-[92%] rounded-[999px] bg-[#1267FF]" />
          </span>
          <span>{text.line2AfterAI}</span>
        </h1>

        <p className="mt-7 max-w-[620px] text-[16px] leading-relaxed text-[#071B4D]/78 sm:text-[18px]">
          {text.subtitle}
        </p>
      </div>
    </section>
  )
}

export default HeroTextBlock
