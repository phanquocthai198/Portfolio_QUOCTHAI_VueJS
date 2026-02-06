<template>
  <footer class="py-16 border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg transition-colors duration-300">
    <div class="container mx-auto px-4 lg:px-8">

      <!-- Title Section -->
      <div class="text-center space-y-4 mb-12">
        <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          {{ t.footer.title }}
        </h3>

        <p class="text-gray-600 dark:text-gray-400 text-lg">
          {{ t.footer.subtitle }}
        </p>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center items-center gap-8 mb-12">
        <a
          href="#"
          aria-label="LinkedIn"
          class="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card
                flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:bg-gradient-primary hover:text-white
                transition-all duration-300 transform hover:scale-110"
        >
          <i class="fab fa-linkedin-in text-lg"></i>
        </a>

        <a
          href="#"
          aria-label="GitHub"
          class="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card
                flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:bg-gradient-primary hover:text-white
                transition-all duration-300 transform hover:scale-110"
        >
          <i class="fab fa-github text-lg"></i>
        </a>

        <a
          href="#"
          aria-label="Twitter"
          class="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card
                flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:bg-gradient-primary hover:text-white
                transition-all duration-300 transform hover:scale-110"
        >
          <i class="fab fa-twitter text-lg"></i>
        </a>

        <a
          href="#"
          aria-label="Instagram"
          class="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card
                flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:bg-gradient-primary hover:text-white
                transition-all duration-300 transform hover:scale-110"
        >
          <i class="fab fa-instagram text-lg"></i>
        </a>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-gray-200 dark:bg-dark-border mb-8"></div>

      <!-- Copyright -->
      <div class="text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ t.footer.copyright }}
          <span class="font-medium text-gradient-purple dark:text-gradient-pink">
            Figma
          </span>
          &
          <span class="font-medium text-gradient-orange">
            VueJS
          </span>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// Props
const props = defineProps({
  currentLanguage: {
    type: String,
    default: 'vi'
  }
})

// Emits
const emit = defineEmits(['scroll-to-section'])

// Translation dictionary
const translations = {
  vi: {
    footer: {
      title: "Kết nối với tôi",
      subtitle: "Theo dõi tôi trên mạng xã hội",
      copyright: "© 2026 Phan Quốc Thái. Mọi quyền được bảo lưu.",
      builtWith: "Được thiết kế với Figma & VueJS"
    }
  },
  en: {
    footer: {
      title: "Let's Connect",
      subtitle: "Follow me on social media",
      copyright: "© 2026 Phan Quoc Thai. All rights reserved.",
      builtWith: "Built with Figma & VueJS."
    }
  }
}

// Computed translation object
const t = computed(() => translations[props.currentLanguage])
</script>