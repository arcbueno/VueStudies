<template>
    <div>
        <i v-for="estrela in estrelas" :key="estrela.id" :class="estrela.estilo" class="estrela.estilo"
            @click="marcarAvaliacao(estrela.id + 1)"></i>
    </div>
</template>

<script>
export default {
    name: 'InputEstrelas',
    props: {
        numeroEstrelas: {
            default: 0,
            type: Number,
            required: true
        }
    },
    data: () => ({
        estrelas: []
    }),
    created() {
        this.iniciarEstrelas();
    },
    methods: {
        iniciarEstrelas() {
            for (let i = 0; i < this.numeroEstrelas; i++) {
                this.estrelas.push({ id: i, estilo: 'bi-star estrela' });
            }
        },
        marcarAvaliacao(nota) {
            this.estrelas.forEach((estrela, index) => {
                estrela.estilo = index < nota ? 'bi-star-fill estrela' : 'bi-star estrela';
            });
            this.$emit('avaliacao', nota);
        }
    }
}
</script>

<style scoped>
.estrela {
    font-size: 1.5rem;
    color: #999;
    margin-left: 1px;
    margin-right: 1px;
}
</style>