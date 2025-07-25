<template>
  <div class="hello">
    <component :is="view === 'home' ? 'MyHome' : 'PublicarVaga'"></component>
  </div>
</template>

<script>
import MyHome from '@/components/views/Home.vue';
import PublicarVaga from '@/components/views/PublicarVaga.vue';
export default {
  name: "ConteudoPadrao", // Name of the component
  props: {
    view: {
      type: String,
      default: 'home'
    }
  },
  components: {
    MyHome,
    PublicarVaga
  },
  data: () => ({
    titulo: 'Conteúdo Padrão',
    conteudo: 'home' // Default content
  }),

}

</script>

<style scoped></style>