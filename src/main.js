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

// icons - Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

// fonts - DouyinSans
import '@chinese-fonts/dymh/dist/DouyinSansBold/result.css';

// App Entry
import App from '@/App.vue';

// global styles
import '@/style.css';

const app = createApp(App).use(router).use(pinia).use(store).use(api).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
