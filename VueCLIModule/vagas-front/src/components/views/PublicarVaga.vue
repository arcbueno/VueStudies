<template>
  <div class="hello">
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h4> Cadastre a sua vaga para milhares de profissionais</h4>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="form-group">
            <label for="titulo">Título da vaga</label>
            <input type="text" class="form-control" id="titulo" placeholder="Exemplo: Desenvolvedor Frontend"
              v-model="titulo">
            <small class="form-text text-muted">Por favor, insira o título da vaga.</small>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="form-group">
            <label for="descricao">Descrição</label>
            <input type="text" class="form-control" id="descricao" placeholder="Exemplo: Desenvolvedor Frontend"
              v-model="descricao">
            <small class="form-text text-muted">Por favor, insira a descrição da vaga.</small>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="form-group">
            <label for="salario">Salário</label>
            <input type="number" class="form-control" id="salario" placeholder="Exemplo: 5000" v-model="salario">
            <small class="form-text text-muted">Por favor, insira o salário da vaga.</small>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="modalidade">Modalidade</label>
            <select class="form-control" id="modalidade" v-model="modalidade">
              <option value="" disabled>Selecione a modalidade</option>
              <option value="1">Home Office</option>
              <option value="2">Presencial</option>
            </select>
            <small class="form-text text-muted">Informe onde as atividades vão ser realizadas</small>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="tipo">Tipo</label>
            <select class="form-control" id="tipo" v-model="tipo">
              <option value="" disabled>Selecione o tipo</option>
              <option value="1">CLT</option>
              <option value="2">PJ</option>
            </select>
            <small class="form-text text-muted">Informe o tipo de contratação</small>
          </div>
        </div>
      </div>


      <div class="row mt-3">
        <div class="col">
          <button type="submit" class="btn btn-primary" @click="publicarVaga">Publicar Vaga</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVaga", // Name of the component
  // Additional properties or methods can be added here if needed
  data() {
    return {
      titulo: "",
      descricao: "",
      salario: null,
      modalidade: "",
      tipo: ""
    };
  },
  methods: {
    publicarVaga() {
      console.log("Vaga publicada com sucesso!");
      let vagas = JSON.parse(localStorage.getItem("vagas")) || [];
      let vaga = {
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo
      };
      vagas.push(vaga);

      let success = this.validateForm();

      if (!success) {
        this.emitter.emit('alert', {
          tipo: 'error',
          titulo: 'Erro ao publicar vaga',
          descricao: 'Por favor, preencha todos os campos corretamente.'
        });
        return;
      }

      localStorage.setItem("vagas", JSON.stringify(vagas));


      this.emitter.emit('alert', {
        tipo: 'success',
        titulo: `Vaga ${this.titulo} publicada com sucesso!`,
        descricao: "Sua vaga foi adicionada à lista de vagas."
      }); // Emit an event to show the alert
      this.resetForm();
    },
    resetForm() {
      this.titulo = "";
      this.descricao = "";
      this.salario = null;
      this.modalidade = "";
      this.tipo = "";
    },
    validateForm() {
      return this.titulo && this.descricao && this.salario && this.modalidade && this.tipo;
    }
  }
}
</script>

<style scoped></style>