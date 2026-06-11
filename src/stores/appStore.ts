import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const mobileMenuOpen = ref(false)
  const openDropdown = ref<string | null>(null)
  const galleryModalOpen = ref(false)
  const selectedGalleryIndex = ref(0)
  
  // Actions
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  
  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
  }
  
  const setOpenDropdown = (dropdown: string | null) => {
    openDropdown.value = dropdown
  }
  
  const toggleDropdown = (dropdown: string) => {
    openDropdown.value = openDropdown.value === dropdown ? null : dropdown
  }
  
  const openGalleryModal = (index: number = 0) => {
    galleryModalOpen.value = true
    selectedGalleryIndex.value = index
  }
  
  const closeGalleryModal = () => {
    galleryModalOpen.value = false
  }
  
  // Getters
  const isDropdownOpen = computed(() => (dropdown: string) => openDropdown.value === dropdown)
  
  return {
    mobileMenuOpen,
    openDropdown,
    galleryModalOpen,
    selectedGalleryIndex,
    toggleMobileMenu,
    closeMobileMenu,
    setOpenDropdown,
    toggleDropdown,
    openGalleryModal,
    closeGalleryModal,
    isDropdownOpen,
  }
})
