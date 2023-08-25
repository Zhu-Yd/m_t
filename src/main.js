import {createApp} from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import {
    Button, Icon, Tab, Tabs, TreeSelect, Stepper, ActionBarButton,
    ActionBarIcon,
    ActionBar,Toast
} from 'vant';
import router from './router/index';
import "./common/css/base.less";
import store from "@/store";
const app = createApp(App);
app.use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper).use(ActionBarButton)
    .use(ActionBarIcon)
    .use(ActionBar).use(Toast);
app.use(router);
app.use(store) //使用vuex
app.mount('#app');