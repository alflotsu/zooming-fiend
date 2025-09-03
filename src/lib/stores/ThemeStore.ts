// src/stores/theme.ts
import { writable } from 'svelte/store';
import { themeDB } from '$lib/utils/indexeddb';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

// Create a writable store with the default theme
const createThemeStore = () => {
	const defaultTheme: Theme = 'dark';
	const { subscribe, set, update } = writable<Theme>(defaultTheme);

	// Load theme from IndexedDB on initialization
	const loadTheme = async () => {
		if (!browser) return;
		
		try {
			const savedTheme = await themeDB.get<Theme>('preferences', 'theme');
			if (savedTheme) {
				set(savedTheme);
				// Apply theme immediately to prevent FOUC
				applyThemeToDocument(savedTheme);
			} else {
				// Check system preference if no saved theme
				const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const initialTheme: Theme = systemPrefersDark ? 'dark' : 'light';
				set(initialTheme);
				applyThemeToDocument(initialTheme);
				// Save the initial preference
				await themeDB.set('preferences', 'theme', initialTheme);
			}
		} catch (error) {
			console.warn('Failed to load theme from IndexedDB:', error);
			// Fallback to checking localStorage for migration
			try {
				const localStorageTheme = localStorage.getItem('theme');
				if (localStorageTheme && (localStorageTheme === 'light' || localStorageTheme === 'dark')) {
					const migratedTheme = localStorageTheme as Theme;
					set(migratedTheme);
					applyThemeToDocument(migratedTheme);
					// Migrate to IndexedDB
					await themeDB.set('preferences', 'theme', migratedTheme);
					// Remove from localStorage
					localStorage.removeItem('theme');
				}
			} catch (migrationError) {
				console.warn('Failed to migrate theme from localStorage:', migrationError);
			}
		}
	};

	// Save theme to IndexedDB and apply to document
	const saveTheme = async (theme: Theme) => {
		if (!browser) return;
		
		// Apply theme immediately
		applyThemeToDocument(theme);
		
		// Save to both IndexedDB (primary) and localStorage (for FOUC prevention)
		try {
			await themeDB.set('preferences', 'theme', theme);
		} catch (error) {
			console.warn('Failed to save theme to IndexedDB:', error);
		}
		
		// Always save to localStorage as well for the blocking script
		try {
			localStorage.setItem('theme', theme);
		} catch (error) {
			console.warn('Failed to save theme to localStorage:', error);
		}
	};

	// Apply theme to document element
	const applyThemeToDocument = (theme: Theme) => {
		if (typeof document !== 'undefined') {
			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	};

	// Custom set function that saves to IndexedDB
	const setTheme = (theme: Theme) => {
		set(theme);
		saveTheme(theme);
	};

	// Custom update function that saves to IndexedDB
	const updateTheme = (updater: (value: Theme) => Theme) => {
		update((currentTheme) => {
			const newTheme = updater(currentTheme);
			saveTheme(newTheme);
			return newTheme;
		});
	};

	// Load theme on store creation
	loadTheme();

	return {
		subscribe,
		set: setTheme,
		update: updateTheme,
		loadTheme // Expose for manual reloading if needed
	};
};

export const themeStore = createThemeStore();

// Export utility function for early theme application
export const getStoredTheme = async (): Promise<Theme | null> => {
	if (!browser) return null;
	
	try {
		const theme = await themeDB.get<Theme>('preferences', 'theme')!;
		return theme
	} catch (error) {
		console.warn('Failed to get stored theme:', error);
		// Fallback to localStorage
		try {
			const localStorageTheme = localStorage.getItem('theme');
			if (localStorageTheme && (localStorageTheme === 'light' || localStorageTheme === 'dark')) {
				return localStorageTheme as Theme;
			}
		} catch (fallbackError) {
			console.warn('Failed to get theme from localStorage:', fallbackError);
		}
		return null;
	}
};

// Export utility function for early theme application (synchronous version for blocking script)
export const getStoredThemeSync = (): Theme | null => {
	if (typeof localStorage === 'undefined') return null;
	
	try {
		// For the blocking script, we'll still check localStorage as a fallback
		// since IndexedDB is async and we need synchronous access
		const theme = localStorage.getItem('theme');
		if (theme && (theme === 'light' || theme === 'dark')) {
			return theme as Theme;
		}
	} catch (error) {
		console.warn('Failed to get theme from localStorage:', error);
	}
	
	return null;
};
