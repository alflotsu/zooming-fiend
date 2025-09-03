import { createBrowserClient, isBrowser, parse } from '@supabase/ssr'

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

export const createSupabaseLoadClient = (fetch: typeof globalThis.fetch) => {
  return createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    },
    cookies: {
      getAll() {
        if (!isBrowser()) {
          return []
        }
        const cookies = parse(document.cookie)
        return Object.entries(cookies).map(([name, value]) => ({ name, value }))
      },
      setAll(cookiesToSet) {
        if (!isBrowser()) return
        
        cookiesToSet.forEach(({ name, value, options }) => {
          document.cookie = `${name}=${value}; path=/; ${options ? Object.entries(options).map(([k, v]) => `${k}=${v}`).join('; ') : ''}`
        })
      }
    }
  })
}

export const createSupabaseClient = () => {
  return createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        if (!isBrowser()) {
          return []
        }
        const cookies = parse(document.cookie)
        return Object.entries(cookies).map(([name, value]) => ({ name, value }))
      },
      setAll(cookiesToSet) {
        if (!isBrowser()) return
        
        cookiesToSet.forEach(({ name, value, options }) => {
          document.cookie = `${name}=${value}; path=/; ${options ? Object.entries(options).map(([k, v]) => `${k}=${v}`).join('; ') : ''}`
        })
      }
    }
  })
}
