<template>
  <section id="about" class="py-20 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {{ t.about.title }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.about.description }}
          </p>

          <div class="flex flex-wrap gap-3 pt-1">
            <span class="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200">
              {{ t.about.highlights.research }}
            </span>
            <span class="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200">
              {{ t.about.highlights.ui }}
            </span>
            <span class="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200">
              {{ t.about.highlights.dev }}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-8 pt-4">
            <div class="text-center">
              <div class="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                1+
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ t.about.years }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                5+
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ t.about.projects }}</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-square max-w-sm mx-auto lg:ml-auto rounded-3xl bg-gradient-primary p-1">
            <div class="bg-white dark:bg-dark-card rounded-3xl p-6 h-full flex items-center justify-center">
              <lottie-player
                src="https://lottie.host/a6511d4b-7edb-4d18-8edf-9b6a1a8f9a3f/xZk9MlaW0E.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style="width:100%; height:100%;"
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

// Translation dictionary
const translations = {
  vi: {
    about: {
      title: 'Về Tôi',
      description: 'Xin chào! Tôi là một UI/UX Designer tập trung vào việc tạo ra những trải nghiệm người dùng trực quan, hiện đại và dễ sử dụng. Tôi làm việc chủ yếu với Figma để nghiên cứu người dùng, xây dựng wireframe, prototype và thiết kế giao diện hoàn chỉnh. Bên cạnh đó, tôi phát triển frontend với Vue.js, TypeScript và Tailwind CSS nhằm hiện thực hóa các thiết kế thành sản phẩm web mượt mà, nhất quán và tối ưu trải nghiệm người dùng.',
      highlights: {
        research: 'User Research',
        ui: 'UI Design',
        dev: 'Frontend Dev'
      },
      years: 'Năm Kinh Nghiệm',
      projects: 'Dự Án Hoàn Thành'
    }
  },
  en: {
    about: {
      title: 'About Me',
      description: 'Hello! I am a UI/UX Designer who focuses on creating intuitive, modern, and user-friendly digital experiences. I primarily work with Figma to conduct user research, build wireframes, prototypes, and complete interface designs. Alongside design, I develop frontend applications using Vue.js, TypeScript and Tailwind CSS to bring designs to life with smooth interactions and consistent user experiences.',
      highlights: {
        research: 'User Research',
        ui: 'UI Design',
        dev: 'Frontend Dev'
      },
      years: 'Years of Experience',
      projects: 'Completed Projects'
    }
  }
}

// Computed translation object
const t = computed(() => translations[props.currentLanguage])
</script>
