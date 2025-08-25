# Zypser Mobile App 🏎️📱

Zypser is a cross-platform mobile application built with Expo and React Native. This app provides a streamlined platform for business networking and growth.

NOTE: This is a Sandbox environment (Expo Go)

## 💻 Installation

```bash
# Clone the repository
git clone <repository-url>
cd zypser-expo-app

# Install dependencies
npm install
```

## 🔧 Environment Setup

Before running the app, you need to set up your environment variables:

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` with your actual values:
```bash
# Required Environment Variables
EXPO_PUBLIC_CLOUDFRONT_URL=https://your-cloudfront-url.com
EXPO_PUBLIC_API_URL=https://your-api-url.com

# Optional Environment Variables
EXPO_PUBLIC_OTP_VALID_TIME=60000
EXPO_PUBLIC_APP_NAME=Zypser
```

## 🚀 Running the App

```bash
# Start the development server
npm start
```

```bash
# Run on iOS
npm run ios
```

## 🔗 Deep Linking

For setting up deep linking, follow the documentation provided by Expo: [Deep Linking](https://docs.expo.dev/guides/deep-linking/).

## 📁 File Structure

The project is organized as follows:

```shell
- src          - Source code for the application.
- /components  - Reusable components.
- /screens     - Application screens.
- /assets      - Application assets (all assets stored here will be bundled).
- /utils       - Helper functions and utilities.
```

## 👥 Contributors

We are inviting developers who are passionate about Expo and React Native to collaborate with us. Whether it's contributing code, sharing ideas, or providing feedback, all forms of collaboration are welcome.
