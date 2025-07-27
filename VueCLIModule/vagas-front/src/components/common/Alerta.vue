<template>
    <div>
        <div :class="alertStyle" role="alert">
            <slot name="titulo">Successo!</slot>
            <hr>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "MeuAlerta",
    props: {
        tipo: {
            type: String,
            default: 'success' // Default type is success
        }
    },
    computed: {
        alertStyle() {
            switch (this.tipo) {
                case 'success':
                    return 'alert alert-success';
                case 'error':
                    return 'alert alert-danger';
                case 'warning':
                    return 'alert alert-warning';
                case 'info':
                    return 'alert alert-info';
                default:
                    return 'alert alert-success'; // Fallback style
            }
        }
    }
}
</script>

<style></style>