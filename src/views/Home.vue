<template>
  <MainLayout
  >
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-8 text-center lg:text-left">
            <!-- Greeting -->
            <div class="animate-fade-in">
              <span class="inline-block px-4 py-2 bg-gradient-primary/10 dark:bg-gradient-primary/20 text-gradient-purple dark:text-gradient-pink rounded-full text-sm font-medium">
                {{ t.hero.greeting }}
              </span>
            </div>
            
            <!-- Main Heading -->
            <div class="space-y-4 animate-slide-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-gray-900 dark:text-white">{{ t.hero.title1 }}</span>
                <br />
                <span class="bg-gradient-primary bg-clip-text text-transparent">
                  {{ t.hero.title2 }}
                </span>
              </h1>
              <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                {{ t.hero.subtitle1 }} <span class="text-gradient-purple dark:text-gradient-pink font-medium">Figma</span> & 
                <span class="text-gradient-orange dark:text-gradient-accent font-medium">VueJS</span>
              </p>
            </div>
            
            <!-- Description -->
            <div class="animate-slide-up" style="animation-delay: 0.2s;">
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {{ t.hero.description }}
              </p>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style="animation-delay: 0.4s;">
              <a
                href="/cv/Phan-Quoc-Thai-CV.pdf"
                download
                class="flex items-center justify-center gap-2 px-8 py-4 
                      border-2 border-teal-500 text-teal-500 
                      rounded-xl font-semibold 
                      hover:bg-teal-500 hover:text-white 
                      transition-all duration-300"
              >
                <i class="fas fa-download"></i>
                {{ t.hero.downloadCv }}
              </a>
              <button
                @click="scrollToSection('contact')"
                class="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-gradient-purple/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                {{ t.hero.cta1 }}
              </button>
              <button
                @click="scrollToSection('projects')"
                class="px-8 py-4 border-2 border-transparent text-gradient-purple dark:text-gradient-pink rounded-xl font-semibold hover:bg-gradient-primary hover:text-white hover:border-gradient-purple transition-all duration-300"
                >
                {{ t.hero.cta2 }}
              </button>
            </div>
          </div>
          
          <!-- Hero Image/Animation -->
          <div class="relative animate-scale-in" style="animation-delay: 0.8s;">
            <div class="relative aspect-square max-w-lg mx-auto">
              <div class="absolute inset-0 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
                <lottie-player
                  src="https://assets.lottiefiles.com/packages/lf20_tno6cg2w.json" background="transparent" speed="1" loop autoplay
                  style="width:100%;height:100%;position:relative;z-index:10;"
                ></lottie-player>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    <!-- Other Sections -->
    <AboutSection :current-language="language" />
    
    <SkillsSection :current-language="language" />

    <ServicesSection :current-language="language" />
 
    <ProjectsSection :current-language="language" />
  
    <ContactSection :current-language="language" />

  </MainLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import MainLayout from '@/layouts/MainLayout.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Language state
const { language } = useLanguage()

// Translation dictionary
const translations = {
  vi: {
    hero: {
      greeting: '👋 Xin chào, tôi là Phan Quốc Thái',
      title1: 'UI/UX Designer',
      title2: '& Developer',
      subtitle1: 'Chuyên về',
      description: 'Tôi tạo ra những ứng dụng web hiện đại, phản hồi nhanh với thiết kế đẹp mắt và trải nghiệm người dùng tuyệt vời.',
      cta1: 'Thuê Tôi Ngay',
      cta2: 'Xem Dự Án',
      downloadCv: 'Tải CV'
    }
  },
  en: {
    hero: {
      greeting: '👋 Hello, I am Phan Quoc Thai',
      title1: 'UI/UX Designer',
      title2: '& Developer',
      subtitle1: 'Specialized in',
      description: 'I create modern, responsive web applications with beautiful designs and excellent user experiences.',
      cta1: 'Hire Me Now',
      cta2: 'View Projects',
      downloadCv: 'Download CV'
    }
  }
}

// Computed translation object
const t = computed(() => translations[language.value])

// Methods
const updateLanguage = (newLanguage) => {
  currentLanguage.value = newLanguage
  localStorage.setItem('language', newLanguage)
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Lifecycle
// onMounted(() => {
//   // Initialize language from localStorage
//   const savedLanguage = localStorage.getItem('language')
//   if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
//     currentLanguage.value = savedLanguage
//   }
// })
</script>