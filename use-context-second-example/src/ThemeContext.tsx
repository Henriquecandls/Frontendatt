import { createContext } from 'react'

export type ThemeMode = 'dark' | 'light'

export const ThemeContext = createContext<ThemeMode>('dark')