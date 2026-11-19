import { createClient as createSupabaseClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Validates and retrieves the Supabase environment configuration.
 * Normalizes project URL by stripping any accidental trailing '/rest/v1' or slashes.
 */
function getSupabaseConfig(): { url: string; key: string } {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const rawKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!rawUrl || !rawKey) {
    throw new Error(
      '[TyresXpress Supabase] Configuration error: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY must be defined in your environment (.env.local).'
    );
  }

  // Normalize project URL (e.g. if the REST endpoint URL ending in /rest/v1 was provided)
  const normalizedUrl = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');

  return { url: normalizedUrl, key: rawKey };
}

let clientInstance: SupabaseClient | null = null;

/**
 * Creates or retrieves a reusable Supabase client instance.
 * Throws a helpful, clear error if environment variables are missing.
 */
export function createClient(): SupabaseClient {
  if (!clientInstance) {
    const { url, key } = getSupabaseConfig();
    clientInstance = createSupabaseClient(url, key);
  }
  return clientInstance;
}

/**
 * Alias for createClient() providing direct client access.
 */
export const getSupabaseClient = createClient;

/**
 * Lazily initialized singleton client for direct imports:
 * e.g., `import { supabase } from '@/lib/supabase/client';`
 */
export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = createClient();
    const value = (client as unknown as Record<string | symbol, unknown>)[prop];
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});

export default supabase;
