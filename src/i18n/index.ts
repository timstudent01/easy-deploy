import en from './en'
import zh from './zh'

export const messages = {
  en,
  zh,
}

export type Locale = keyof typeof messages
