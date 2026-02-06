<template>
  <section id="contact" class="relative overflow-hidden py-20 lg:py-32 bg-gray-50 dark:bg-dark-bg-secondary">
    <div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-primary/15 blur-3xl"></div>
    <div class="absolute bottom-0 -right-24 h-64 w-64 rounded-full bg-gradient-primary/10 blur-3xl"></div>
    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Toast Notification -->
      <Transition name="fade-slide">
        <div
          v-if="notification.visible"
          class="fixed top-20 right-6 lg:top-20 z-[9999] pointer-events-none"
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            class="pointer-events-auto flex items-start gap-3 rounded-2xl border border-gray-200/80 dark:border-dark-border/80 bg-white/95 dark:bg-dark-card/95 backdrop-blur-md px-5 py-4 shadow-2xl shadow-black/10 dark:shadow-black/40"
          >
            <div
              :class="[
                'flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg ring-1 ring-white/40',
                notificationStyle.iconBg,
                notificationStyle.iconShadow
              ]"
            >
              <i :class="notificationStyle.icon"></i>
            </div>
            <div class="min-w-[200px]">
              <p class="text-sm font-semibold text-gray-900 dark:text-white">
                {{ notification.title }}
              </p>
              <p class="text-sm text-gray-700 dark:text-gray-200">
                {{ notification.message }}
              </p>
            </div>
            <button
              type="button"
              class="ml-1 rounded-lg p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="Close notification"
              @click="hideNotification"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </Transition>

      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-gradient-primary/10 dark:bg-gradient-primary/20 text-gradient-purple dark:text-gradient-pink rounded-full text-sm font-medium mb-4">
          {{ t.contact.badge }}
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t.contact.title1 }} <span class="bg-gradient-primary bg-clip-text text-transparent">{{ t.contact.title2 }}</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t.contact.subtitle }}
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border shadow-card">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t.contact.formTitle }}</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.nameLabel }} <span class="text-red-500">*</span></label>
              <input
                id="name"
                v-model="contactForm.name"
                type="text"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg-secondary border border-gray-300 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-gradient-purple focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                :placeholder="t.contact.namePlaceholder"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.emailLabel }} <span class="text-red-500">*</span></label>
              <input
                id="email"
                v-model="contactForm.email"
                type="email"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg-secondary border border-gray-300 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-gradient-purple focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.subjectLabel }} <span class="text-red-500">*</span></label>
              <select
                id="subject"
                v-model="contactForm.subject"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg-secondary border border-gray-300 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-gradient-purple focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
              >
                <option value="">{{ t.contact.subjectPlaceholder }}</option>
                <option value="collaboration">{{ t.contact.subjectOptions.collaboration }}</option>
                <option value="consultation">{{ t.contact.subjectOptions.consultation }}</option>
                <option value="other">{{ t.contact.subjectOptions.other }}</option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.messageLabel }} <span class="text-red-500">*</span></label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="5"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg-secondary border border-gray-300 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-gradient-purple focus:border-transparent transition-all duration-200 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                :placeholder="t.contact.messagePlaceholder"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-gradient-purple/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="!isSubmitting">{{ t.contact.submitButton }}</span>
              <span v-else class="flex items-center justify-center">
                <i class="fas fa-spinner fa-spin mr-2"></i>
                {{ t.contact.submitting }}
              </span>
            </button>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                <i class="fas fa-envelope text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ t.contact.info.email }}</h4>
                <p class="text-gray-600 dark:text-gray-300">vaydeghost@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                <i class="fas fa-phone text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ t.contact.info.phone }}</h4>
                <p class="text-gray-600 dark:text-gray-300">+84 0397157546</p>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                <i class="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ t.contact.info.location }}</h4>
                <p class="text-gray-600 dark:text-gray-300">{{ t.contact.info.locationValue }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref, reactive, computed } from 'vue'

// Props
const props = defineProps({
  currentLanguage: {
    type: String,
    default: 'vi'
  }
})

// Contact form state
const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
let notificationTimer = null

const notification = ref({
  visible: false,
  title: '',
  message: '',
  type: 'success'
})

// Translation dictionary
const translations = {
  vi: {
    contact: {
      badge: 'Liên Hệ Với Tôi',
      title1: 'Hãy',
      title2: 'Bắt Đầu',
      subtitle: 'Có một ý tưởng tuyệt vời? Hãy liên hệ với tôi để thảo luận về dự án của bạn và nhận báo giá miễn phí.',
      formTitle: 'Gửi Tin Nhắn',
      nameLabel: 'Họ và Tên',
      namePlaceholder: 'Nhập họ và tên của bạn',
      emailLabel: 'Email',
      subjectLabel: 'Chủ Đề',
      subjectPlaceholder: 'Chọn chủ đề...',
      subjectOptions: {
        collaboration: 'Hợp tác',
        consultation: 'Tư vấn',
        other: 'Khác'
      },
      messageLabel: 'Tin Nhắn',
      messagePlaceholder: 'Hãy mô tả chi tiết về dự án hoặc yêu cầu của bạn...',
      submitButton: 'Gửi Tin Nhắn',
      submitting: 'Đang gửi...',
      info: {
        email: 'Email',
        phone: 'Điện Thoại',
        location: 'Vị Trí',
        locationValue: 'Cần Thơ, Việt Nam'
      },
      successTitle: 'Gửi thành công',
      successMessage: 'Tin nhắn của bạn đã được gửi. Tôi sẽ phản hồi sớm nhất!',
      validationTitle: 'Thiếu thông tin',
      validationMessage: 'Vui lòng điền đầy đủ các trường bắt buộc.',
      invalidEmailMessage: 'Email chưa hợp lệ. Vui lòng kiểm tra lại.',
      errorTitle: 'Gửi thất bại',
      errorMessage: 'Không thể gửi tin nhắn lúc này. Vui lòng thử lại sau.'
    }
  },
  en: {
    contact: {
      badge: 'Contact Me',
      title1: 'Let\'s',
      title2: 'Get Started',
      subtitle: 'Have a great idea? Contact me to discuss your project and get a free quote.',
      formTitle: 'Send Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Choose a subject...',
      subjectOptions: {
        collaboration: 'Collaboration',
        consultation: 'Consultation',
        other: 'Other'
      },
      messageLabel: 'Message',
      messagePlaceholder: 'Please describe your project or request in detail...',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Can Tho, Vietnam'
      },
      successTitle: 'Message sent',
      successMessage: 'Thanks! I will get back to you shortly.',
      validationTitle: 'Missing information',
      validationMessage: 'Please complete all required fields.',
      invalidEmailMessage: 'Email looks invalid. Please check again.',
      errorTitle: 'Send failed',
      errorMessage: 'Unable to send right now. Please try again later.'
    }
  }
}

// Computed translation object
const t = computed(() => translations[props.currentLanguage])

const notificationStyle = computed(() => {
  if (notification.value.type === 'warning') {
    return {
      iconBg: 'bg-amber-500',
      iconShadow: 'shadow-amber-500/30',
      icon: 'fas fa-exclamation'
    }
  }
  if (notification.value.type === 'error') {
    return {
      iconBg: 'bg-red-500',
      iconShadow: 'shadow-red-500/30',
      icon: 'fas fa-times'
    }
  }
  return {
    iconBg: 'bg-emerald-500',
    iconShadow: 'shadow-emerald-500/30',
    icon: 'fas fa-check'
  }
})

const showNotification = (type, title, message) => {
  if (notificationTimer) {
    clearTimeout(notificationTimer)
  }
  notification.value = {
    visible: true,
    title,
    message,
    type
  }
  notificationTimer = setTimeout(() => {
    notification.value.visible = false
  }, 3500)
}

const hideNotification = () => {
  if (notificationTimer) {
    clearTimeout(notificationTimer)
  }
  notification.value.visible = false
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// Form submission
const handleSubmit = async () => {
  if (
    !contactForm.name.trim() ||
    !contactForm.email.trim() ||
    !contactForm.subject.trim() ||
    !contactForm.message.trim()
  ) {
    showNotification('warning', t.value.contact.validationTitle, t.value.contact.validationMessage)
    return
  }

  if (!isValidEmail(contactForm.email.trim())) {
    showNotification('warning', t.value.contact.validationTitle, t.value.contact.invalidEmailMessage)
    return
  }

  isSubmitting.value = true
  
  try {
    // Simulate API call (temporary until BE is ready)
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Reset form
    Object.keys(contactForm).forEach(key => {
      contactForm[key] = ''
    })

    showNotification('success', t.value.contact.successTitle, t.value.contact.successMessage)
  } catch (error) {
    showNotification('error', t.value.contact.errorTitle, t.value.contact.errorMessage)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
