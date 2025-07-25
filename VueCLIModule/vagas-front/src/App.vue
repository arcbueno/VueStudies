<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <MyTopo @change-view="changeView" />
    <MyConteudo :view="currentView" />
  </div>
</template>

<script>
import MyConteudo from '@/components/layouts/ConteudoPadrao.vue';
import MyTopo from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from './components/common/VagasFavoritas.vue';

export default {
  name: 'App',
  components: {
    MyConteudo,
    MyTopo,
    VagasFavoritas
  },
  data() {
    return {
      currentView: 'home' // Default view
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    }
  }
}
</script>

<style scoped></style>
