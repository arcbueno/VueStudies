<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="col d-flex justify-content-between">
                <div>
                    {{ titulo }}
                </div>
                <div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                            v-model="favoritada">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Favoritar</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            {{ descricao }}
        </div>
        <div class="card-footer">
            <small class="text-muted">Salario: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo
                }}</small>
        </div>
    </div>
</template>

<script>

export default {
    name: "MinhaVaga", // Name of the component
    data: () => ({
        favoritada: false // Placeholder for event emitter
    }),
    watch: {
        favoritada(newValue) {
            if (newValue) {
                this.emitter.emit('favoritar-vaga', this.titulo);
            } else {
                this.emitter.emit('desfavoritar-vaga', this.titulo);
            }
        }
    },
    props: {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        salario: {
            type: Number,
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        }
    },
    computed: {
        getModalidade() {
            switch (this.modalidade) {
                case '1':
                    return 'Home Office';
                case '2':
                    return 'Presencial';
                default:
                    return 'Não especificado';
            }
        },
        getTipo() {
            switch (this.tipo) {
                case '1':
                    return 'CLT';
                case '2':
                    return 'PJ';
                default:
                    return 'Não especificado';
            }
        }
    },
}
</script>

<style></style>