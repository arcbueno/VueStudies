<template>
    <div>
        <div class="div-vagas-favoritas">

            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">Vagas favoritas</button>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Vagas favoritadas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <li class="list-group-item" v-for="vaga in vagasFavoritas" :key="vaga">
                    {{ vaga }}
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VagasFavoritas",
    data: () => ({
        vagasFavoritas: [] // Placeholder for favorite jobs
    }),
    mounted() {
        this.emitter.on('favoritar-vaga', (vaga) => {
            console.log('Vaga favoritada:', vaga);
            this.vagasFavoritas.push(vaga);
        });
        this.emitter.on('desfavoritar-vaga', (vaga) => {
            let indexArray = this.vagasFavoritas.findIndex(item => item.titulo === vaga.titulo);
            if (indexArray !== -1) {
                this.vagasFavoritas.splice(indexArray, 1);
            }
        });
    }
}
</script>

<style scoped>
.div-vagas-favoritas {
    position: absolute;
    z-index: 1;
    top: 70px;
    right: 0px;
}
</style>