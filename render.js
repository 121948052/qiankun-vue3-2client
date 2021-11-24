import { createApp } from 'vue';

function vueRender({ loading }) {
  return createApp({
    template: `
      <div id="subapp-wrap">
        <h4 v-if="loading" class="subapp-loading">Loading...</h4>
        <div id="subapp-viewport"></div>
      </div>
    `,
    el: '#subapp-wrap',
    data() {
      return {
        loading,
      };
    },
  });
}

let app = null;

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading }).mount(App, '#app');
  } else {
    app.loading = loading;
  }
}
