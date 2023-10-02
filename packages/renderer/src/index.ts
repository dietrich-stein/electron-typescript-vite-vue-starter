import { createApp, h } from 'vue';
import App from '/@/App.vue';

const app  = createApp({
  render: ()=>h(App),
});

//app.use(FooComponent);

app.mount('#app');
