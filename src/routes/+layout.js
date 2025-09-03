import { createSupabaseLoadClient } from '$lib/supabase.client'

// Disable prerendering since we need dynamic authentication
export const prerender = false;

// Enable SSR for dynamic functionality
export const ssr = true;

// Enable client-side routing for SPA-like navigation
export const csr = true;

export const load = async ({ fetch, data, depends }) => {
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient(fetch)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { supabase, session, user }
}
