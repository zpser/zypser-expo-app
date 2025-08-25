
function getRequiredEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function getOptionalEnvVar(key: string, defaultValue?: string): string | undefined {
  return process.env[key] || defaultValue;
}

// Required environment variables
export const CLOUDFRONT_URL = getRequiredEnvVar('EXPO_PUBLIC_CLOUDFRONT_URL');
export const API_URL = getRequiredEnvVar('EXPO_PUBLIC_API_URL');

// Optional environment variables with explicit defaults
export const OTP_VALID_TIME = getOptionalEnvVar('EXPO_PUBLIC_OTP_VALID_TIME', '60000');
export const APP_NAME = getOptionalEnvVar('EXPO_PUBLIC_APP_NAME', 'MyApp');

// Or make them all required if you prefer
// export const OTP_VALID_TIME = getRequiredEnvVar('EXPO_PUBLIC_OTP_VALID_TIME');
// export const APP_NAME = getRequiredEnvVar('EXPO_PUBLIC_APP_NAME');
 