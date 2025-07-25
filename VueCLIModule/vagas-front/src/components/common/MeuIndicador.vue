<template>
    <div :class="estilo">
        <p>{{ titulo }}</p>
        <h2>{{ valor }}</h2>
    </div>
</template>

<script>
export default {
    name: "MeuIndicador", // Name of the component
    props: {
        titulo: {
            type: String,
            required: true
        },
        valor: {
            type: Number,
            required: true
        },
        bg: {
            type: String,
            default: 'bg-dark'
        },
        color: {
            type: String,
            default: 'text-white'
        }
    },
    computed: {
        estilo() {
            return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`;
        }
    },

}
</script>

<style scoped></style>