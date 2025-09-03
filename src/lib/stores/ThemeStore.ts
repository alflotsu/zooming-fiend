// src/stores/theme.ts
import { persisted } from 'svelte-persisted-store';

export type Theme = 'light' | 'dark';

// The store now enforces that its value is of type Theme
export const themeStore = persisted<Theme>('theme', 'dark');