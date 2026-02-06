<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen transition-colors duration-300">
    <!-- Background Pattern -->
    <div class="fixed inset-0 -z-10 bg-pattern">
      <div class="absolute inset-0 bg-white dark:bg-dark-bg"></div>
    </div>
    
    <!-- Navigation -->
    <NavigationBar 
      :is-dark-mode="isDarkMode"
      :is-mobile-menu-open="isMobileMenuOpen"
      :current-language="language"
      :active-section="activeSection"
      :navigation-items="currentNavigationItems"
      @toggle-dark-mode="toggleDarkMode"
      @toggle-language="toggleLanguage"
      @toggle-mobile-menu="toggleMobileMenu"
      @scroll-to-section="scrollToSection"
    />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <FooterSection 
      :current-language="language"
      @scroll-to-section="scrollToSection"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import NavigationBar from '@/components/common/NavigationBar.vue'
import FooterSection from '@/components/common/FooterSection.vue'

// // Props
// const props = defineProps({
//   currentLanguage: {
//     type: String,
//     default: 'vi'
//   }
// })


// Current language state
const { language, toggleLanguage } = useLanguage()

// Dark mode state
const isDarkMode = ref(false)

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Active section state
const activeSection = ref('hero')

// Translation dictionary
const translations = {
  vi: {
    nav: {
      home: 'Trang Chủ',
      about: 'Về Tôi',
      skills: 'Kỹ Năng',
      services: 'Dịch Vụ',
      projects: 'Dự Án',
      contact: 'Liên Hệ'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    }
  }
}


// Computed translation object
const t = computed(() => translations[language.value])

// Computed navigation items based on language
const currentNavigationItems = computed(() => [
  { id: 'hero', label: t.value.nav.home },
  { id: 'about', label: t.value.nav.about },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'services', label: t.value.nav.services },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'contact', label: t.value.nav.contact }
])

// Dark mode functions
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  updateHtmlClass()
}

const updateHtmlClass = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Language toggle function


// Mobile menu toggle function
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Scroll functions
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update active section on scroll
const updateActiveSection = () => {
  const sections = ['hero', 'about', 'skills', 'services', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

// // Emits
// const emit = defineEmits(['update-language'])

// Lifecycle
onMounted(() => {
  // Initialize dark mode
  const savedDarkMode = localStorage.getItem('darkMode')
  isDarkMode.value = savedDarkMode === 'true'
  updateHtmlClass()
  
  // Add scroll listener
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>