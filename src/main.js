import {createApp} from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import {Button,Icon} from 'vant';
import router from './router/index';
import "./common/css/base.less";
const app = createApp(App);
app.use(Button).use(Icon);
app.use(router);
app.mount('#app');