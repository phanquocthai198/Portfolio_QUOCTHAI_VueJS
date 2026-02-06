# Portfolio QUOC THAI - Vue 3 + Vite Migration

## 🎯 Giới thiệu dự án

Đây là website portfolio cá nhân của mình – **Phan Quoc Thai**. Ban đầu nó chỉ là một file HTML duy nhất với code Vue 3 nhúng bên trong. Sau một thời gian sử dụng, mình quyết định refactor lại toàn bộ sang kiến trúc **Vue 3 + Vite** để dễ mở rộng, dễ bảo trì và chuyên nghiệp hơn.

## 📋 Quá trình migration

### ✅ Những việc đã hoàn thành

1. **Phân tích cấu trúc cũ**
   - Xem lại toàn bộ code trong file HTML gốc
   - Liệt kê các section, component và tính năng
   - Ghi chú chi tiết để không bỏ sót

2. **Setup Vue 3 + Vite**
   - Tạo `package.json` với các dependency cần thiết (Vue 3, Vue Router, Vite…)
   - Config `vite.config.js` với alias cho gọn gàng
   - Setup `tailwind.config.js` với màu sắc, animation custom
   - Thêm `postcss.config.js` để xử lý CSS

3. **Kiến trúc component**
   - **MainLayout.vue**: layout chính, có navigation và footer
   - **NavigationBar.vue**: menu responsive, có mobile toggle
   - **FooterSection.vue**: footer với social links
   - **Home.vue**: trang chính
   - Các section: About, Skills, Services, Projects, Contact

4. **Quản lý state**
   - Chuyển toàn bộ logic JS sang reactive state của Vue
   - Giữ nguyên tính năng đổi ngôn ngữ (vi/en)
   - Dark mode vẫn hoạt động
   - Form validation và submit logic được giữ lại

5. **Styling**
   - Toàn bộ CSS đưa vào `src/styles/main.css`
   - Tailwind CSS vẫn là nền tảng chính
   - Animation, gradient custom vẫn chạy tốt
   - Responsive design không bị ảnh hưởng

## 🚀 Cài đặt & chạy dự án

### Yêu cầu
- Node.js >= 16
- npm hoặc yarn

### Các bước

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 📁 Cấu trúc thư mục

```
src/
├── assets/
│   └── images/
├── components/
│   ├── common/
│   │   ├── NavigationBar.vue
│   │   └── FooterSection.vue
│   └── sections/
│       ├── AboutSection.vue
│       ├── SkillsSection.vue
│       ├── ServicesSection.vue
│       ├── ProjectsSection.vue
│       └── ContactSection.vue
├── layouts/
│   └── MainLayout.vue
├── views/
│   └── Home.vue
├── styles/
│   └── main.css
├── router/
│   └── index.js
├── App.vue
└── main.js
```

## 🎨 Các tính năng

- Đa ngôn ngữ (vi/en)  
- Dark mode toggle  
- Responsive design (mobile-first)  
- Smooth scrolling giữa các section  
- Contact form có validation  
- Hero, About, Skills, Services, Projects, Contact đầy đủ  
- Social links (LinkedIn, GitHub, Twitter, Instagram – placeholder)  
- Animation: fade-in, slide-up, scale-in, float  
- Gradient text và background  
- Lottie animation cho hero và about  

## 🔧 Config quan trọng

- **package.json**: Vue 3.4.0, Vue Router 4.2.5, Vite 5.0.0, Tailwind 3.3.6  
- **tailwind.config.js**: custom color, dark mode, animation  
- **vite.config.js**: plugin Vue, alias, dev server  

## 🌟 Điểm cải thiện

- Code chia nhỏ thành component, dễ tái sử dụng  
- State quản lý rõ ràng hơn  
- Cấu trúc gọn gàng, dễ maintain  
- Dễ mở rộng thêm page mới  
- Dev experience tốt hơn (HMR, build nhanh)  
- Build production tối ưu  

## 📝 Việc cần làm tiếp

- Test lại toàn bộ với `npm run dev`  
- Thêm hình ảnh thật cho project showcase  
- Cập nhật social links với URL thật  
- Kết nối contact form với backend thực tế  
- Thêm chức năng tải CV/PDF  

### Nâng cấp trong tương lai
- Thêm page: About, Projects, Blog  
- Pinia cho state phức tạp  
- TypeScript để có type safety  
- Unit test framework  
- SEO: meta tags, sitemap  
- Performance: lazy load, image optimization  
- Accessibility: ARIA labels, keyboard navigation  

### Tách nhỏ component
- SkillCard.vue  
- ProjectCard.vue  
- ServiceCard.vue  
- ContactForm.vue  
- LanguageToggle.vue  
- ThemeToggle.vue  

## 🐛 Vấn đề còn tồn tại

- Lottie player nên chuyển sang Vue component (`vue3-lottie`)  
- Font Awesome nên cài qua npm thay vì CDN  
- Asset path cần chỉnh lại khi deploy  

## 📞 Hỗ trợ

Nếu gặp lỗi:
- Kiểm tra console log  
- Đảm bảo cài đủ npm package  
- Node.js version đúng  
- Kiểm tra network request  

---

**Thiết kế gốc**: Phan Quoc Thai  
**Migration sang Vue 3 + Vite**: Thực hiện bởi mình  
**Cập nhật lần cuối**: Tháng 2/2026  

---

Bạn có muốn mình viết thêm một phiên bản README ngắn gọn hơn, kiểu “dành cho GitHub” – súc tích, chỉ highlight những điểm chính, để người xem repo đọc nhanh là hiểu không?
