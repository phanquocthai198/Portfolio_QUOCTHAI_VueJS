<template>
  <section id="projects" class="py-20 lg:py-32">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-gradient-primary/10 dark:bg-gradient-primary/20 text-gradient-purple dark:text-gradient-pink rounded-full text-sm font-medium mb-4">
          {{ t.projects.badge }}
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t.projects.title1 }} <span class="bg-gradient-primary bg-clip-text text-transparent">{{ t.projects.title2 }}</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t.projects.subtitle }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in displayedProjects"
          :key="project.id"
          class="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:border-gradient-purple dark:hover:border-gradient-pink transition-all duration-300 hover:shadow-card hover:-translate-y-2 animate-fade-in"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex gap-4">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-white/95 text-gray-900 rounded-lg font-semibold shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
                >
                  {{ t.projects.viewDemo }}
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient-purple dark:group-hover:text-gradient-pink transition-colors">
            {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-5">
            <span
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              class="px-3 py-1 bg-gradient-primary/10 text-gradient-purple dark:text-gradient-pink rounded-full text-xs font-medium"
            >
              {{ tag }}
            </span>
            </div>

            <!-- Buttons -->
            <div class="flex items-center gap-4 mt-4">
            <!-- Live Demo -->
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-300 border border-teal-500/80 rounded-lg px-4 py-2 bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm transition-all duration-300 hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 dark:hover:bg-teal-400 dark:hover:text-gray-900 dark:hover:border-teal-400 dark:hover:shadow-teal-400/40"
              >
                <i class="fas fa-external-link-alt"></i>
                {{ t.projects.viewDemo }}
              </a>

              <!-- View Code -->
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-300 border border-purple-500/80 rounded-lg px-4 py-2 bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 dark:hover:bg-purple-400 dark:hover:text-gray-900 dark:hover:border-purple-400 dark:hover:shadow-purple-400/40"
              >
                <i class="fas fa-code"></i>
                {{ t.projects.viewCode }}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button
          @click="toggleShowAll"
          class="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold border border-white/10 shadow-md shadow-gradient-purple/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gradient-purple/40 dark:shadow-gradient-pink/30 dark:hover:shadow-gradient-pink/40"
        >
          {{ showAll ? t.projects.viewLess : t.projects.viewAll }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'

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
    projects: {
      badge: 'Dự Án Của Tôi',
      title1: 'Các',
      title2: 'Dự Án',
      subtitle: 'Khám phá các dự án mà tôi đã hoàn thành, từ ý tưởng ban đầu đến sản phẩm hoàn chỉnh.',
      viewDemo: 'Xem Demo',
      viewCode: 'Xem Code',
      viewAll: 'Xem Tất Cả Dự Án',
      viewLess: 'Thu Gọn'
    }
  },
  en: {
    projects: {
      badge: 'My Projects',
      title1: 'Recent',
      title2: 'Projects',
      subtitle: 'Explore the projects I have completed, from initial concept to final product.',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      viewAll: 'View All Projects',
      viewLess: 'Show Less'
    }
  }
}

// Projects data with both languages
const projectsData = {
  vi: [
    {
      id: 1,
      title: 'Hệ Thống Quản Lý Cửa Hàng Trực Tuyến',
      description: 'Ứng dụng thương mại điện tử với Vue.js và Node.js, hỗ trợ quản lý sản phẩm, đơn hàng và thanh toán trực tuyến.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://example-ecommerce.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Quản Lý Dự Án',
      description: 'Dashboard quản lý dự án với biểu đồ tương tác, quản lý nhiệm vụ và thống kê hiệu suất theo thời gian thực.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
      demoUrl: 'https://example-dashboard.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'dashboard',
      featured: true
    },
    {
      id: 3,
      title: 'Ứng Dụng Ghi Chú Thông Minh',
      description: 'Ứng dụng ghi chú với AI tích hợp, hỗ trợ tóm tắt nội dung, tìm kiếm thông minh và đồng bộ đa nền tảng.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Python', 'FastAPI', 'OpenAI'],
      demoUrl: 'https://example-notes.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'web'
    },
     {
      id: 4,
      title: 'Ứng Dụng Quản Lý Công Việc Cá Nhân',
      description: 'Ứng dụng giúp người dùng quản lý công việc hàng ngày với giao diện thân thiện và tính năng nhắc nhở thông minh.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      tags: ['Angular', 'Firebase', 'TypeScript'],
      demoUrl: 'https://example-todoapp.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'web'
    }

  ],
  en: [
    {
      id: 1,
      title: 'Online Store Management System',
      description: 'E-commerce application with Vue.js and Node.js, supporting product management, orders and online payments.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://example-ecommerce.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Project Management Dashboard',
      description: 'Project management dashboard with interactive charts, task management and real-time performance statistics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
      demoUrl: 'https://example-dashboard.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'dashboard',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Note Taking App',
      description: 'Note-taking app with integrated AI, supporting content summarization, smart search and cross-platform sync.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Python', 'FastAPI', 'OpenAI'],
      demoUrl: 'https://example-notes.com',
      codeUrl: 'https://github.com/your-repo',
      category: 'web'
    },
      {
        id: 4,
        title: 'Personal Task Management App',
        description: 'An app that helps users manage daily tasks with a user-friendly interface and smart reminder features.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
        tags: ['Angular', 'Firebase', 'TypeScript'],
        demoUrl: 'https://example-todoapp.com',
        codeUrl: 'https://github.com/your-repo',
      category: 'web'
    }
  ]
}

// Computed projects based on language
const currentProjects = computed(() => projectsData[props.currentLanguage])
const showAll = ref(false)
const displayedProjects = computed(() =>
  showAll.value ? currentProjects.value : currentProjects.value.slice(0, 3)
)

// Computed translation object
const t = computed(() => translations[props.currentLanguage])

// Methods
const scrollToSection = (sectionId) => {
  emit('scroll-to-section', sectionId)
}

const toggleShowAll = () => {
  showAll.value = !showAll.value
}
</script>
