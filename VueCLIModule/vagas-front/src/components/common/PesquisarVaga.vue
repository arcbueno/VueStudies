<template>
    <div class="h-100 p-5 bg-light border rounded-3">
        <h2>Pesquisar vagas</h2>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>Titulo da vaga</label>
                    <input type="text" class="form-control" id="searchInput" placeholder="Pesquise por palavras chaves"
                        v-model="searchTerm">
                    <small class="form-text text-muted">Exemplo: Desenvolvedor, Frontend, Backend</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-dark mt-2" @click="pesquisarVagas">Pesquisar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PesquisarVaga", // Name of the component
    // Additional properties or methods can be added here if needed
    data: () => ({
        searchTerm: ''
    }),
    methods: {
        pesquisarVagas() {
            // Logic to handle the search functionality
            const searchInput = this.searchTerm;
            this.emitter.emit('search', { titulo: searchInput });
        }
    }
}
</script>

<style scoped></style>