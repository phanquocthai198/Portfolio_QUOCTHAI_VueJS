import { ref } from 'vue'

const STORAGE_KEY = 'language'
const language = ref('vi')

const initLanguage = () => {
  if (typeof window === 'undefined') return
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'vi' || saved === 'en') {
    language.value = saved
  }
}

const setLanguage = (value) => {
  if (value !== 'vi' && value !== 'en') return
  language.value = value
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, value)
  }
}

const toggleLanguage = () => {
  setLanguage(language.value === 'vi' ? 'en' : 'vi')
}

export const useLanguage = () => ({
  language,
  initLanguage,
  setLanguage,
  toggleLanguage
})
