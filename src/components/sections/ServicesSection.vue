<template>
  <section id="services" class="relative overflow-hidden py-20 lg:py-32 bg-gray-50 dark:bg-dark-bg-secondary">
    <div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-primary/15 blur-3xl"></div>
    <div class="absolute bottom-0 -right-24 h-64 w-64 rounded-full bg-gradient-primary/10 blur-3xl"></div>
    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-gradient-primary/10 dark:bg-gradient-primary/20 text-gradient-purple dark:text-gradient-pink rounded-full text-sm font-medium mb-4">
          {{ t.services.badge }}
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t.services.title1 }} <span class="bg-gradient-primary bg-clip-text text-transparent">{{ t.services.title2 }}</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t.services.subtitle }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in currentServices"
          :key="service.id"
          class="group bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-dark-border hover:border-gradient-purple dark:hover:border-gradient-pink transition-all duration-300 hover:shadow-card hover:-translate-y-2 animate-fade-in"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <div class="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i :class="service.icon" class="text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{{ service.description }}</p>
          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center text-sm text-gray-600 dark:text-gray-300"
            >
              <i class="fas fa-check-circle text-gradient-purple dark:text-gradient-pink mr-3"></i>
              {{ feature }}
            </li>
          </ul>
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
    services: {
      badge: 'Dịch Vụ Của Tôi',
      title1: 'Giải Pháp',
      title2: 'Chuyên Nghiệp',
      subtitle: 'Tôi cung cấp các dịch vụ phát triển web toàn diện, từ thiết kế giao diện đến triển khai backend.'
    }
  },
  en: {
    services: {
      badge: 'My Services',
      title1: 'Professional',
      title2: 'Solutions',
      subtitle: 'I provide comprehensive web development services, from interface design to backend deployment.'
    }
  }
}

// Services data with both languages
const servicesData = {
  vi: [
    {
      id: 1,
      title: 'UX UI Designer',
      description: 'Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tối ưu với các công cụ như Figma, Framer và Adobe XD.',
      icon: 'fas fa-paint-brush',
      features: [
        'Thiết kế giao diện người dùng hiện đại',
        'Tối ưu hóa trải nghiệm người dùng',
        'Sử dụng các công cụ thiết kế hàng đầu',
        'Tạo mẫu tương tác và nguyên mẫu'
      ]
    },
    {
      id: 2,
      title: 'Phát Triển Frontend',
      description: 'Xây dựng giao diện người dùng hiện đại, phản hồi nhanh với Vue.js, React và các công nghệ web mới nhất.',
      icon: 'fas fa-laptop-code',
      features: [
        'Thiết kế giao diện responsive hoàn hảo',
        'Tối ưu hiệu suất và tốc độ tải trang',
        'Hỗ trợ trình duyệt chéo',
        'Code có cấu trúc và dễ bảo trì'
      ]
    },
    {
      id: 3,
      title: 'Phát Triển Web',
      description: 'Xây dựng các ứng dụng web mạnh mẽ và có thể mở rộng với Node.js, Express và các công nghệ hiện đại.',
      icon: 'fas fa-server',
      features: [
        'Phát triển ứng dụng web hiệu quả',
        'Tối ưu hiệu suất và tốc độ tải trang',
        'Tích hợp API và dịch vụ bên thứ ba',
        'Bảo mật và bảo trì ứng dụng'
      ]
    }
    
  ],
  en: [
    {
      id: 1,
      title: 'UX UI Design',
      description: 'Design beautiful user interfaces and optimize user experience with tools like Figma, Framer and Adobe XD.',
      icon: 'fas fa-paint-brush',
      features: [
        'Modern user interface design',
        'User experience optimization',
        'Use leading design tools',
        'Create interactive mockups and prototypes'
      ]
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'Build modern, responsive user interfaces with Vue.js, React and the latest web technologies.',
      icon: 'fas fa-laptop-code',
      features: [
        'Perfect responsive interface design',
        'Performance and loading speed optimization',
        'Cross-browser support',
        'Structured and maintainable code'
      ]
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Build powerful and scalable web applications with Node.js, Express and modern technologies.',
      icon: 'fas fa-server',
      features: [
        'Efficient web application development',
        'Performance and loading speed optimization',
        'Third-party API and service integration',
        'Application security and maintenance'
      ]
    }
  ]
}

// Computed services based on language
const currentServices = computed(() => servicesData[props.currentLanguage])

// Computed translation object
const t = computed(() => translations[props.currentLanguage])
</script>
