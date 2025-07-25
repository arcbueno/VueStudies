<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga> </PesquisarVaga>
      </div>
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          <MinhaVaga :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario"
            :modalidade="vaga.modalidade" :tipo="vaga.tipo" />
        </div>
      </div>
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
import MinhaVaga from '../common/MinhaVaga.vue';
export default {
  name: "MyHome", // Name of the component
  components: {
    PesquisarVaga,
    MeuIndicador,
    MinhaVaga
  },
  data: () => ({
    usuariosOnline: 0, // Example data property
    vagas: JSON.parse(localStorage.getItem("vagas")) || [],
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