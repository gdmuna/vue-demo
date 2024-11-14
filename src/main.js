// framework - Vue
import { createApp } from 'vue';

// router - Vue-Router
import router from '@/router';

// store - Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
import store from '@/stores/store';

// api
import api from '@/api/api';

// ui - Varlet
// becase of auto-import, we don't need to import Varlet here
// import Varlet from '@varlet/ui';
// import '@varlet/ui/es/style';
import '@varlet/touch-emulator';

// icons - Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

// App Entry
import App from '@/App.vue';

// global styles
import '@/style.css';

const app = createApp(App).use(router).use(pinia).use(store).use(api).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
