import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/UOttawa_HKFC_Club/",  // <-- Ensure this matches your GitHub repository name
});
