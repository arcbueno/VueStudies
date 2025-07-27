<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga> </PesquisarVaga>
      </div>
      <lista-vagas></lista-vagas>

      <div class="row mt-5">
        <div class="col">
          <MeuIndicador titulo="Vagas abertas" valor="25" bg="bg-dark" color="text-white"> </MeuIndicador>
        </div>
        <div class="col">
          <MeuIndicador titulo="Profissionais cadastrados" valor="125" bg="bg-dark" color="text-white">
          </MeuIndicador>
        </div>
        <div class="col">
          <MeuIndicador titulo="Visitantes online" :valor="usuariosOnline" bg="bg-light" color="text-dark">
          </MeuIndicador>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import PesquisarVaga from '../common/PesquisarVaga.vue';
import MeuIndicador from '../common/MeuIndicador.vue';
import ListaVagas from '../common/ListaVagas.vue';

export default {
  name: "MyHome", // Name of the component
  components: {
    PesquisarVaga,
    MeuIndicador,
    ListaVagas
  },
  data: () => ({
    usuariosOnline: 0, // Example data property

  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 100) + 1;
    }
  },
  created() {
    setInterval(() => {
      this.getUsuariosOnline();
    }, 5000);
  },
}
</script>

<style scoped></style>