import type { SupabaseClient } from '@supabase/supabase-js'

export async function signInWithEmail(supabase: SupabaseClient, email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  return { data, error }
}

export async function signUpWithEmail(supabase: SupabaseClient, email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  return { data, error }
}

export async function signInWithGoogle(supabase: SupabaseClient, redirectTo?: string) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectTo || `${window.location.origin}/auth/callback`
    }
  })
  
  return { data, error }
}

export async function signOut(supabase: SupabaseClient) {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function resetPassword(supabase: SupabaseClient, email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`
  })
  
  return { data, error }
}
