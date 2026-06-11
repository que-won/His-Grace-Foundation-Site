# His Grace Foundation - Tech Stack Migration Guide

## Updated Tech Stack ✨

Your project has been successfully migrated to a modern, professional tech stack:

### Core Framework
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Composition API** - Modern Vue development pattern
- **Vite** - Lightning-fast build tool

### State Management
- **Pinia** - Vue's official state management library
  - Located in `src/stores/`
  - Already set up with `appStore.ts` for UI state (mobile menu, dropdowns, modals)
  - Usage: `import { useAppStore } from '@/stores/appStore'`

### Styling
- **Tailwind CSS** - Utility-first CSS framework
  - Configuration: `tailwind.config.js`
  - PostCSS setup: `postcss.config.js`
  - Replaces scoped CSS for faster development
  - Custom color palette integrated (purple, orange, gold)

### Animations
- **AOS (Animate On Scroll)** - Scroll-triggered animations
  - Already initialized in `main.ts`
  - Usage: Add `data-aos="fade-up"` to any element
  - Common AOS attributes:
    - `data-aos="fade-up"` - Fade in while moving up
    - `data-aos="fade-in"` - Fade in
    - `data-aos-delay="100"` - Delay animation
    - `data-aos-duration="1000"` - Animation duration

### Utilities
- **VueUse** - Collection of Vue 3 Composition utilities
  - Usage: `import { useWindowSize, useScroll } from '@vueuse/core'`
  - Common functions:
    - `useWindowSize()` - Track window dimensions
    - `useScroll()` - Track scroll position
    - `useEventListener()` - Simplified event binding
    - `useLocalStorage()` - Reactive local storage

### Icons
- **Lucide Vue Next** - Beautiful, consistent SVG icons
  - Usage: `import { Heart, Users, Zap } from 'lucide-vue-next'`
  - Register globally in components or use directly
  - Example: `<Heart :size="24" class="text-primary-purple" />`

### Routing
- **Vue Router** - Official routing library for Vue
  - Configuration: `src/router/index.ts`
  - Maintains existing route structure

---

## Quick Start Examples

### Using Pinia for State
```vue
<script setup lang="ts">
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const toggleMenu = () => {
  appStore.toggleMobileMenu()
}
</script>

<template>
  <button @click="toggleMenu">
    {{ appStore.mobileMenuOpen ? 'Close' : 'Open' }}
  </button>
</template>
```

### Using Tailwind CSS Classes
```vue
<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-primary-purple">Title</h1>
    <button class="px-4 py-2 bg-orange-cta text-white rounded-md hover:bg-opacity-90 transition">
      Click Me
    </button>
  </div>
</template>
```

### Using AOS Animations
```vue
<template>
  <div class="section" data-aos="fade-up" data-aos-duration="1000">
    <h2>Animated Section</h2>
    <p>This section fades in when scrolled into view</p>
  </div>
</template>
```

### Using VueUse Utilities
```vue
<script setup lang="ts">
import { useWindowSize, useScroll } from '@vueuse/core'
import { computed } from 'vue'

const { width, height } = useWindowSize()
const { y } = useScroll(window)

const isMobile = computed(() => width.value < 768)
</script>

<template>
  <div>
    <p v-if="isMobile">Mobile view</p>
    <p>Window height: {{ height }}</p>
    <p>Scroll Y: {{ y }}</p>
  </div>
</template>
```

### Using Lucide Icons
```vue
<script setup lang="ts">
import { Heart, Users, Zap } from 'lucide-vue-next'
</script>

<template>
  <div class="flex gap-4">
    <Heart :size="24" class="text-red-500" />
    <Users :size="24" class="text-blue-500" />
    <Zap :size="24" class="text-yellow-500" />
  </div>
</template>
```

---

## Migration Notes

### From Scoped CSS to Tailwind
**Before (Scoped CSS):**
```css
.button {
  padding: 1rem 1.5rem;
  background: #ff5d23;
  border-radius: 8px;
}
```

**After (Tailwind):**
```html
<button class="px-6 py-4 bg-orange-cta rounded-md">Click</button>
```

### Custom Colors Available in Tailwind
- `text-primary-purple` / `bg-primary-purple`
- `text-primary-dark` / `bg-primary-dark`
- `text-orange-cta` / `bg-orange-cta`
- `text-gold-accent` / `bg-gold-accent`
- `text-dark-bg` / `bg-dark-bg`
- `text-gray-secondary` / `bg-gray-secondary`

### File Structure
```
src/
  stores/
    appStore.ts          ← Pinia state management
  components/
    *.vue                ← Update to use Tailwind + Pinia
  router/
    index.ts
  main.ts               ← Already configured with Pinia, AOS, Tailwind
  style.css             ← Tailwind directives added
  App.vue
  vite-env.d.ts
```

---

## Development Workflow

1. **Start dev server:** `npm run dev`
2. **Build for production:** `npm run build`
3. **Preview production build:** `npm run preview`

---

## Next Steps

1. Update your components to use Tailwind CSS classes instead of scoped CSS
2. Leverage Pinia stores for managing component state
3. Add AOS animations to sections for scroll effects
4. Replace icon implementations with Lucide Vue icons
5. Use VueUse utilities for common patterns (scroll detection, window resize, etc.)

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Pinia Docs](https://pinia.vuejs.org/)
- [AOS Docs](https://michalsnik.github.io/aos/)
- [VueUse Docs](https://vueuse.org/)
- [Lucide Icons](https://lucide.dev/)
- [Vue Router Docs](https://router.vuejs.org/)

