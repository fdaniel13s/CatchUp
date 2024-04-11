import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";

// Application Theme
import 'primevue/resources/themes/saga-blue/theme.css' ;
import 'primevue/resources/primevue.min.css' ;// Esto es para los componentes de PrimeVue

//Icons
import 'primeicons/primeicons.css'; // Esto es para los iconos de PrimeVue

//PrimeFlex Support
import 'primeflex/primeflex.css';

//Prime vue components
import Card from "primevue/card";
import Sidebar from "primevue/sidebar";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import Menu from "primevue/menu"; // Esto es para los estilos de PrimeFlex

//Vamos a trabajar con los componentes


const app = createApp(App);
app.use(PrimeVue, {ripple: true}) // ripple es para los botones
    .component('pv-card',Card)
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton)
    .component('pv-sidebar',Sidebar)
    .component('pv-avatar',Avatar)
    .component('pv-toolbar',Toolbar)
    .component('pv-menu-bar',Menubar)
    .component('pv-menu',Menu)
app.mount('#app')



