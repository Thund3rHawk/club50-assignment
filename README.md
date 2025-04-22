# Welcome to My app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). It is specifically designed to demonstrate Supabase email login and logout functionality using React Native, Expo, and NativeWind for styling.

## Screenshots

Here are some screenshots of the app:

   ### Splash Screen
  

   ### Login Screen
   

   ### Home Screen
   


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

   ## Environment Variables

   This project uses a `.env.example` file to manage environment-specific variables. Copy the `.env.example` file to a new file named `.env` in the root directory of your project and update the values as needed.

      ```bash
      cp .env.example .env
      ```

      ### Example

      ```env
      EXPO_PUBLIC_SUPERBASE_URL = ''
      EXPO_PUBLIC_SUPERBASE_ANON_KEY = ''
      ```

      Make sure to add `.env` to your `.gitignore` file to prevent sensitive information from being committed to version control.

2. Start the app

```bash
   npx expo start
```

## 🧩 Features Implemented

- ✅ A splash screen with a basic logo 
- ✅ A login/signup screen
- ✅ Email-based authentication using Supabase
- ✅ Once logged in, users land on a simple home screen displaying "Hello 🖐️, @user_email"
- ✅ A SignOut button on the home screen
- ✅ On SignOut, redirect back to the login/signup screen

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
