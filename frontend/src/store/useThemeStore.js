import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
    persist(
        (set) => ({
            isDark: false,
            toggleDark: () => set((state) => {
                const newDark = !state.isDark
                if (newDark) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
                return { isDark: newDark }
            }),
            initTheme: () => set((state) => {
                if (state.isDark || (!('isDark' in state) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    return { isDark: true }
                } else {
                    document.documentElement.classList.remove('dark')
                    return { isDark: false }
                }
            })
        }),
        {
            name: 'theme-storage',
        }
    )
)
