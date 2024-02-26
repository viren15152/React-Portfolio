import { defineConfig } from 'vite'; // Importing the defineConfig function from Vite

import react from '@vitejs/plugin-react'; // Importing the Vite plugin for React

// Configuration for Vite
export default defineConfig({
  plugins: [react()], // Using the React plugin with Vite
  server: {
    port: 3000, // Setting the development server port to 3000
    open: true // Automatically opening the browser when the server starts
  }
});
