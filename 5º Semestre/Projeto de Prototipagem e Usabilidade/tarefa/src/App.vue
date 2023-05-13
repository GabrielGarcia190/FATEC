<script setup lang="ts"></script>

<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="border border-dark p-4 mt-4 rounded">
    <h1 class="text-center">Formulário para Cadastro</h1>
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" class="form-control" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="gender">Sexo:</label>
        <select class="form-control" id="gender" v-model="gender" required>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>

      <div class="form-group">
        <label for="phone">Telefone:</label>
        <input type="tel" class="form-control" id="phone" v-model="phone" required />
      </div>

      <div class="form-group">
        <label for="city">Cidade:</label>
        <input type="text" class="form-control" id="city" v-model="city" required />
      </div>

      <button type="submit" class="btn btn-success mt-4">Enviar</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      darkMode: false,
      name: "",
      email: "",
      gender: "",
      phone: "",
      city: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.gender && this.phone && this.city) {
        alert(
          `Nome: ${this.name}\nE-mail: ${this.email}\nSexo: ${this.gender}\nTelefone: ${this.phone}\nCidade: ${this.city}`
        );
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
  },
};
</script>
