import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import TheNav from './components/ui/TheNav.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import Commissions from './components/Commissions.vue';
import TheInformation from './components/TheInformation.vue'




const app=  createApp(App)



app.use(router);

app.component('the-nav', TheNav);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('commissions', Commissions);
app.component('the-information', TheInformation);





app.mount('#app');