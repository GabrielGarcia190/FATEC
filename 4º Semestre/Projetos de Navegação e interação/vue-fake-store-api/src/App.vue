<template>
  <div class="font-sans text-black m-4 h-full  items-center justify-center ">
    <h1>Fake Store API with Vue.js</h1>
    <hr />
    <ul class="flex flex-row justify-between text-center items-cente">
      <li><router-link to="/"> Home</router-link></li>
      <li><router-link to="/products"> Produtos</router-link></li>
      <li><router-link to="/about"> Sobre</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
