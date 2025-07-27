<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <MyTopo @change-view="changeView" />
    <meu-alerta v-if="exibirAlerta" :tipo="alertInfo.tipo">
      <template v-slot:titulo>
        <h5>{{ alertInfo.titulo }}</h5>
      </template>
      <p>{{ alertInfo.descricao }}</p>
    </meu-alerta>
    <MyConteudo :view="currentView" />
  </div>
</template>

<script>
import MyConteudo from '@/components/layouts/ConteudoPadrao.vue';
import MyTopo from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from './components/common/VagasFavoritas.vue';
import MeuAlerta from './components/common/Alerta.vue';

export default {
  name: 'App',
  components: {
    MyConteudo,
    MyTopo,
    VagasFavoritas,
    MeuAlerta,
  },
  data() {
    return {
      currentView: 'home', // Default view
      exibirAlerta: false,
      alertInfo: {
        tipo: '',
        titulo: '',
        descricao: ''
      }
    };
  },
  mounted() {
    this.emitter.on('alert', (alertData) => {
      this.alertInfo = alertData
      this.exibirAlerta = true;
      setTimeout(() => {
        this.exibirAlerta = false;
      }, 3000); // Hide alert after 3 seconds
    });
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    }
  }
}
</script>

<style scoped></style>
