/**
 * Environment configuration
 * Access environment variables with type safety
 */

export const env = {
  supabase: {
    url: process.env.EXPO_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  environment: process.env.EXPO_PUBLIC_ENV || 'development',
  isDevelopment: process.env.EXPO_PUBLIC_ENV === 'development',
  isProduction: process.env.EXPO_PUBLIC_ENV === 'production',
} as const;

/**
 * Validate required environment variables
 */
export function validateEnv() {
  const required = [
    { key: 'EXPO_PUBLIC_SUPABASE_URL', value: env.supabase.url },
    { key: 'EXPO_PUBLIC_SUPABASE_ANON_KEY', value: env.supabase.anonKey },
  ];

  const missing = required.filter((item) => !item.value);

  if (missing.length > 0) {
    console.warn(
      '⚠️  Missing environment variables:',
      missing.map((item) => item.key).join(', ')
    );
    console.warn('Please check your .env file');
  }

  return missing.length === 0;
}
