import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,vue}'] }, // Default options for all files
    { files: ['**/*.{js,mjs,cjs,vue}'], languageOptions: { globals: globals.browser } }, // Browser globals
    pluginVue.configs['flat/essential'] // Vue 3 essential rules
]);
