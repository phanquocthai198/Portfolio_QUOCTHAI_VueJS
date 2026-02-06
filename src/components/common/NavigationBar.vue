<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-border transition-all duration-300">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#hero" @click.prevent="handleLogoClick" class="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            QUOC THAI
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="'#' + item.id"
            @click.prevent="handleNavClick(item.id)"
            class="text-gray-700 dark:text-gray-300 hover:text-gradient-purple dark:hover:text-gradient-pink transition-colors duration-200 font-medium"
            :class="{ 'bg-gradient-primary bg-clip-text text-transparent': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
          
          <!-- Language Switcher -->
          <button
            @click="$emit('toggle-language')"
            class="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors duration-200 font-medium text-sm"
            :aria-label="currentLanguage === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'"
          >
            {{ currentLanguage === 'vi' ? 'ENG' : 'VIE' }}
          </button>
          
          <!-- Dark Mode Toggle -->
          <button
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors duration-200"
            :aria-label="isDarkMode ? 'Tắt chế độ tối' : 'Bật chế độ tối'"
          >
            <i 
              :class="isDarkMode ? 'fas fa-sun text-yellow-500' : 'fas fa-moon text-gray-600'"
              class="w-5 h-5"
            ></i>
          </button>
        </div>
        
        <!-- Mobile Menu Button & Controls -->
        <div class="flex md:hidden items-center space-x-2">
          <!-- Language Switcher Mobile -->
          <button
            @click="$emit('toggle-language')"
            class="px-2 py-1.5 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors duration-200 font-medium text-xs"
          >
            {{ currentLanguage === 'vi' ? 'ENG' : 'VIE' }}
          </button>
          
          <!-- Dark Mode Toggle Mobile -->
          <button
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors duration-200"
          >
            <i 
              :class="isDarkMode ? 'fas fa-sun text-yellow-500' : 'fas fa-moon text-gray-600'"
              class="w-4 h-4"
            ></i>
          </button>
          
          <!-- Hamburger Menu Button -->
          <button
            @click="$emit('toggle-mobile-menu')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors duration-200"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <i 
              :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
              class="w-5 h-5 text-gray-700 dark:text-gray-300"
            ></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-200 dark:border-dark-border animate-fade-in"
      >
        <div class="flex flex-col space-y-3">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="'#' + item.id"
            @click.prevent="handleMobileNavClick(item.id)"
            class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            :class="{ 'bg-gradient-primary bg-clip-text text-transparent': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  },
  isMobileMenuOpen: {
    type: Boolean,
    default: false
  },
  currentLanguage: {
    type: String,
    default: 'vi'
  },
  activeSection: {
    type: String,
    default: 'hero'
  },
  navigationItems: {
    type: Array,
    default: () => []
  }
})

// Emits
const emit = defineEmits(['toggle-dark-mode', 'toggle-language', 'toggle-mobile-menu', 'scroll-to-section'])

// Methods
const handleLogoClick = () => {
  emit('scroll-to-section', 'hero')
}

// Methods
// const handleLogoClick = () => {
//   scrollToSection('hero')
// }

const handleNavClick = (sectionId) => {
  scrollToSection(sectionId)
}

const handleMobileNavClick = (sectionId) => {
  emit('toggle-mobile-menu')
  scrollToSection(sectionId)
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>