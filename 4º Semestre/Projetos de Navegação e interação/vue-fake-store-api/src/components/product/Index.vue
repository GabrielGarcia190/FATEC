<template>
  <div class=" grid grid-cols-3">
    <div v-for="p in products" :key="p.id   " class=" bg-[#D9D9D9] w-[50vh]  p-3 shadow-xl rounded-lg items-center flex flex-col mt-6">
        
      <h1 class="font-bold text-md mb-3 text-center"> {{p?.title}} </h1>
      <img :src="p.image" class="rounded-md w-60 h-60" />
      <p class="mt-4">Qtd em Estoque: 100</p>
      <h2>R$ {{p.price}}</h2>
       </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import apiconf from "../../api-conf.json";
import axios from "axios";

const baseUrl = apiconf.baseUrl;

const products = ref([]);

const getAllProducts = async () => {
  await axios
    .get(baseUrl + "/products")
    .then((response) => {
      products.value = response.data;
    })
    .catch((error) => {
      alert("Erro" + JSON.stringify(error));
    });
};

onMounted(() => {
  getAllProducts();
});
</script>
