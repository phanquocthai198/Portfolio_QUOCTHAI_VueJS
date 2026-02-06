<template>
  <section id="skills" class="relative overflow-hidden py-20 lg:py-32 bg-gray-50 dark:bg-dark-bg-secondary">
    <div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-primary/15 blur-3xl"></div>
    <div class="absolute bottom-0 -right-24 h-64 w-64 rounded-full bg-gradient-primary/10 blur-3xl"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-gradient-primary/10 dark:bg-gradient-primary/20 text-gradient-purple dark:text-gradient-pink rounded-full text-sm font-medium mb-4">
          {{ t.skills.badge }}
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t.skills.title1 }} <span class="bg-gradient-primary bg-clip-text text-transparent">{{ t.skills.title2 }}</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t.skills.subtitle }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-start">
        <!-- Technical Skills -->
        <div class="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border hover:border-gradient-purple dark:hover:border-gradient-pink transition-all duration-300">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <i class="fas fa-code text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t.skills.technical.title }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t.skills.technical.subtitle }}</p>
              </div>
            </div>
            <div class="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {{ currentTechnicalSkills.length }} {{ t.skills.technical.toolsLabel }}
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="skill in currentTechnicalSkills"
              :key="skill.name"
              class="flex items-center gap-4 rounded-2xl border border-gray-200/70 dark:border-dark-border/70 bg-gray-50 dark:bg-dark-bg-secondary px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-gradient-purple dark:hover:border-gradient-pink"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary/10">
                <i :class="skill.icon" class="text-xl text-gradient-purple dark:text-gradient-pink"></i>
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">{{ skill.name }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ skill.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Skills -->
        <div class="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border hover:border-gradient-purple dark:hover:border-gradient-pink transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center">
              <i class="fas fa-lightbulb text-white text-xl"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t.skills.professional.title }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ t.skills.professional.subtitle }}</p>
            </div>
          </div>

          <div class="space-y-5">
            <div
              v-for="skill in professionalSkills"
              :key="skill.name"
              class="rounded-2xl border border-gray-200/70 dark:border-dark-border/70 bg-gray-50 dark:bg-dark-bg-secondary p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-gradient-purple dark:hover:border-gradient-pink"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary/10">
                    <i :class="skill.icon" class="text-lg text-gradient-purple dark:text-gradient-pink"></i>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ skill.name }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ skill.hint }}</p>
                  </div>
                </div>
                <span class="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-primary/10 text-gradient-purple dark:text-gradient-pink">
                  {{ skill.levelLabel }}
                </span>
              </div>
              <div class="mt-3 h-2 rounded-full bg-gray-100 dark:bg-dark-bg-secondary overflow-hidden">
                <div class="h-full rounded-full bg-gradient-primary" :style="{ width: skill.level + '%' }"></div>
              </div>
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
    skills: {
      badge: 'Kỹ Năng Của Tôi',
      title1: 'Kỹ Năng',
      title2: 'Chuyên Môn',
      subtitle: 'Tổng hợp các kỹ năng cốt lõi để tạo ra sản phẩm đẹp, nhanh và mượt mà.',
      technical: {
        title: 'Kỹ Năng Kỹ Thuật',
        subtitle: 'Thiết kế + phát triển UI hiện đại',
        toolsLabel: 'Công Cụ'
      },
      professional: {
        title: 'Kỹ Năng Mềm',
        subtitle: 'Tư duy & cách làm việc chuyên nghiệp'
      }
    }
  },
  en: {
    skills: {
      badge: 'My Skills',
      title1: 'Professional',
      title2: 'Skills',
      subtitle: 'A refined mix of design and development skills focused on polished, high-performing experiences.',
      technical: {
        title: 'Technical Skills',
        subtitle: 'Design + modern UI development',
        toolsLabel: 'Tools'
      },
      professional: {
        title: 'Soft Skills',
        subtitle: 'Mindset & collaborative execution'
      }
    }
  }
}

const technicalSkills = [
  {
    name: 'Figma',
    label: { vi: 'Thiết kế UI/UX', en: 'UI/UX Design' },
    tag: { vi: 'Design', en: 'Design' },
    level: 92,
    icon: 'fab fa-figma'
  },
  {
    name: 'Design System',
    label: { vi: 'Hệ thống giao diện', en: 'Visual System' },
    tag: { vi: 'Design', en: 'Design' },
    level: 88,
    icon: 'fas fa-palette'
  },
  {
    name: 'HTML/CSS',
    label: { vi: 'Giao diện Frontend', en: 'Frontend' },
    tag: { vi: 'UI', en: 'UI' },
    level: 90,
    icon: 'fab fa-html5'
  },
  {
    name: 'JavaScript',
    label: { vi: 'Logic tương tác', en: 'Interaction Logic' },
    tag: { vi: 'Frontend', en: 'Frontend' },
    level: 86,
    icon: 'fab fa-js'
  },
  {
    name: 'Tailwind CSS',
    label: { vi: 'UI Styling', en: 'UI Styling' },
    tag: { vi: 'Style', en: 'Style' },
    level: 84,
    icon: 'fas fa-wind'
  },
  {
    name: 'Vue.js',
    label: { vi: 'Framework', en: 'Framework' },
    tag: { vi: 'Frontend', en: 'Frontend' },
    level: 88,
    icon: 'fab fa-vuejs'
  },
  {
    name: 'TypeScript',
    label: { vi: 'Typed JS', en: 'Typed JS' },
    tag: { vi: 'Frontend', en: 'Frontend' },
    level: 82,
    icon: 'fas fa-code'
  },
  {
    name: 'MongoDB',
    label: { vi: 'Cơ sở dữ liệu', en: 'Database' },
    tag: { vi: 'Data', en: 'Data' },
    level: 80,
    icon: 'fa fa-database'
  },
  {
    name: 'Git',
    label: { vi: 'Quản lý phiên bản', en: 'Version Control' },
    tag: { vi: 'Tooling', en: 'Tooling' },
    level: 85,
    icon: 'fab fa-git-alt'
  },
  {
    name: 'Microsoft Office',
    label: { vi: 'Tài liệu & báo cáo', en: 'Docs & Reporting' },
    tag: { vi: 'Productivity', en: 'Productivity' },
    level: 78,
    icon: 'fas fa-file-alt'
  }
]

const currentTechnicalSkills = computed(() =>
  technicalSkills.map((skill) => ({
    ...skill,
    label: skill.label[props.currentLanguage],
    tag: skill.tag[props.currentLanguage]
  }))
)

const professionalSkills = computed(() => [
  {
    name: props.currentLanguage === 'vi' ? 'Giao Tiếp' : 'Communication',
    hint: props.currentLanguage === 'vi' ? 'Trình bày rõ ràng' : 'Clear articulation',
    level: 84,
    levelLabel: props.currentLanguage === 'vi' ? 'Vững vàng' : 'Strong',
    icon: 'fas fa-comments'
  },
  {
    name: props.currentLanguage === 'vi' ? 'Làm Việc Nhóm' : 'Team Work',
    hint: props.currentLanguage === 'vi' ? 'Phối hợp đa vai trò' : 'Cross-team synergy',
    level: 88,
    levelLabel: props.currentLanguage === 'vi' ? 'Nâng cao' : 'Advanced',
    icon: 'fas fa-users'
  },
  {
    name: props.currentLanguage === 'vi' ? 'Sáng Tạo' : 'Creativity',
    hint: props.currentLanguage === 'vi' ? 'Tư duy mới mẻ' : 'Fresh ideas',
    level: 90,
    levelLabel: props.currentLanguage === 'vi' ? 'Chuyên gia' : 'Expert',
    icon: 'fas fa-lightbulb'
  },
  {
    name: props.currentLanguage === 'vi' ? 'Giải Quyết Vấn Đề' : 'Problem Solving',
    hint: props.currentLanguage === 'vi' ? 'Logic & quyết đoán' : 'Logical decisions',
    level: 86,
    levelLabel: props.currentLanguage === 'vi' ? 'Nâng cao' : 'Advanced',
    icon: 'fas fa-puzzle-piece'
  },
  {
    name: props.currentLanguage === 'vi' ? 'Sử Dụng AI Hiệu Quả' : 'Using AI Effectively',
    hint: props.currentLanguage === 'vi' ? 'Tối ưu năng suất' : 'Boost productivity',
    level: 84,
    levelLabel: props.currentLanguage === 'vi' ? 'Vững vàng' : 'Strong',
    icon: 'fas fa-robot'
  }
])

// Computed translation object
const t = computed(() => translations[props.currentLanguage])
</script>
