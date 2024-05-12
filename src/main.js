import {createApp} from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import {
    Button, Icon, Tab, Tabs, TreeSelect, Stepper, ActionBarButton,
    ActionBarIcon, ActionBar, Toast, Checkbox, CheckboxGroup, SubmitBar, ContactCard, Card,AddressList,AddressEdit,
    Form, Field, CellGroup
} from 'vant';
import router from './router/index';
import "./common/css/base.less";
import 'vant/lib/index.css'
import store from "@/store";
import { useEventBus } from '@/common/js/EventBus';


const app = createApp(App);
app.use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper).use(ActionBarButton)
    .use(ActionBarIcon).use(ActionBar).use(Toast).use(Checkbox).use(CheckboxGroup).use(SubmitBar)
    .use(ContactCard).use(Card).use(AddressList).use(AddressEdit).use(Form).use(Field).use(CellGroup);
app.use(router);
app.use(store) //使用vuex
// 将事件总线提供给整个应用程序
app.provide('eventBus', useEventBus())
app.mount('#app');