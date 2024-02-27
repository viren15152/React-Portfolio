import { defineConfig } from 'vite'; // Importing the defineConfig function from Vite

import react from '@vitejs/plugin-react'; // Importing the Vite plugin for React

// Configuration for Vite
export default defineConfig({
  plugins: [react()], // Using the React plugin with Vite
  server: {
    port: 4001, // Setting the development server port to 4000
    open: true // Automatically opening the browser when the server starts
  }
});
