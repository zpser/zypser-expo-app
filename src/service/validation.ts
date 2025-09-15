import { z } from "zod";

// Phone number validation with international support
export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  // Accept local numbers too; we'll normalize by prefixing '+'
  .regex(/^\+?\d{6,15}$/, "Please enter a valid phone number")
  .transform((val) => {
    const cleaned = val.replace(/\s+/g, "").replace(/[^\d+]/g, "");
    return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
  });

// Email validation
export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address")
  .toLowerCase()
  .trim();

// OTP validation - 6 digits only
export const otpSchema = z
  .string()
  .length(6, "OTP must be exactly 6 digits")
  .regex(/^\d{6}$/, "OTP must contain only numbers");

// Country code validation
export const countryCodeSchema = z
  .string()
  .regex(/^\+\d{1,4}$/, "Invalid country code format")
  .default("+61");

// Login form schemas
export const phoneLoginSchema = z.object({
  phoneNumber: phoneSchema,
  countryCode: countryCodeSchema.optional(),
});

export const emailLoginSchema = z.object({
  email: emailSchema,
});

export const otpVerificationSchema = z
  .object({
    otp: otpSchema,
    phoneNumber: phoneSchema.optional(),
    email: emailSchema.optional(),
  })
  .refine((data) => data.phoneNumber || data.email, {
    message: "Either phone number or email is required",
    path: ["phoneNumber"], // you can also set ["email"]
  });
// Type exports
export type PhoneLoginData = z.infer<typeof phoneLoginSchema>;
export type EmailLoginData = z.infer<typeof emailLoginSchema>;
export type OTPVerificationData = z.infer<typeof otpVerificationSchema>;

// Validation utilities
export const validatePhoneNumber = (phone: string) => {
  try {
    return { success: true, data: phoneSchema.parse(phone) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || "Invalid phone number",
      };
    }
    return { success: false, error: "Validation failed" };
  }
};

export const validateEmail = (email: string) => {
  try {
    return { success: true, data: emailSchema.parse(email) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || "Invalid email",
      };
    }
    return { success: false, error: "Validation failed" };
  }
};

export const validateOTP = (otp: string) => {
  try {
    return { success: true, data: otpSchema.parse(otp) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || "Invalid OTP",
      };
    }
    return { success: false, error: "Validation failed" };
  }
};

// Common validation patterns
export const validationPatterns = {
  phone: /^\+?[1-9]\d{1,14}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  otp: /^\d{6}$/,
  countryCode: /^\+\d{1,4}$/,
} as const;

// Error messages
export const validationMessages = {
  required: "This field is required",
  invalidPhone: "Please enter a valid phone number",
  invalidEmail: "Please enter a valid email address",
  invalidOTP: "OTP must be exactly 6 digits",
  phoneTooShort: "Phone number is too short",
  phoneTooLong: "Phone number is too long",
  emailTooLong: "Email address is too long",
} as const;
