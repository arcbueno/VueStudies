<template>
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
            <MinhaVaga :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario"
                :modalidade="vaga.modalidade" :tipo="vaga.tipo" />
        </div>
    </div>
</template>

<script>
import MinhaVaga from './MinhaVaga.vue';
export default {
    name: "ListaVagas",
    components: {
        MinhaVaga
    },
    data: () => ({
        vagas: JSON.parse(localStorage.getItem("vagas")) || [] // Fetching vagas from localStorage
    }),
    mounted() {
        this.emitter.on('search', (searchData) => {
            const searchTerm = searchData.titulo.toLowerCase();
            this.vagas = JSON.parse(localStorage.getItem("vagas")).filter(vaga =>
                vaga.titulo.toLowerCase().includes(searchTerm) ||
                vaga.descricao.toLowerCase().includes(searchTerm)
            );
        });
    },
}
</script>

<style></style>