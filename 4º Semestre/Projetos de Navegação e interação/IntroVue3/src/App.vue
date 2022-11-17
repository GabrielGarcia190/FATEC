<template>
  <div class="flex flex-col items-center bg-gray-800 text-white">
    <!-- <h1 class="text-6xl font-serif"> - OLÁ MUNDO - </h1> -->
    <div class="border border-b-white p-2 rounded-md mt-2 text-center">
      <h2 class="text-5xl text-green-400">{{ appName }}</h2>
      <h3 class="text-2xl text-green-200 mt-3">- {{ author }} -</h3>
      <h3 class="text-xl text-green-100">{{ city }}</h3>
    </div>
    <hr />
    <div class="border border-white flex items-center justify-center flex-col m-6">
      <h3 class="text-2xl text-green-200 mt-3">- TO DO LIST -</h3>
      <div class="mb-4">
        <input
          type="text"
          name="todo"
          id="todo"
          v-model="newTodo"
          class="bg-gray-600 p-2 mt-4 rounded-md"
          placeholder="Insira objetivos na lista"
        />
        <button
          @click="addTodo()"
          class="mt-4 p-2 text-black uppercase font-bold rounded-xl bg-yellow-500 ml-4"
        >
          Adicionar
        </button>
      </div>
      <hr class="bg-white w-full"/>
      <ul class="mt-5 rounded-md mb-6">
        <li v-for="todo in todos" class="m-5">
          {{ todo.name }}

          <select
            name="status"
            id="status"
            class="bg-gray-800 border border-black rounded-md p-2"
          >
            <option value="todo">A FAZER</option>
            <option value="todo">FAZENDO</option>
            <option value="todo">DONE</option>
          </select>
          <button
            @click="removeTodo(todo.id)"
            class="bg-red-700 border-black mb-3 text-white  float-right h-[4vh] w-[4vh] ml-4 rounded-full uppercase font-bold"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

let appName = "Introdução ao Vue.js";
let author = "Gabriel Garcia Rodolfol Alves";
const city = ref("Jales/SP");

let genID = 3;

const addTodo = () => {
  genID++;
  todos.push({
    id: genID,
    name: newTodo.value,
    status: "todo",
  });
  newTodo.value = "";
};

const newTodo = ref("");

const removeTodo = (id) => {
  let index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
};

const total = reactive({ todo: 0, doing: 0, done: 0 });

const calc = computed(() => {
  todos.todo = 0;
  todos.doing = 0;
  todos.done = 0;

  todos.array.forEach((el) => {
    if (el.status == "todo") {
      total.todo++;
    } else if (el.status == "doing") {
      total.doing++;
    } else {
      total.done++;
    }
  });
});

const todos = reactive([
  { id: 1, name: "Estudar estrutura de dados", status: "todo" },
  { id: 2, name: "Estudar algoritmos", status: "doing" },
  { id: 3, name: "Estudar Vue.js", status: "doing" },
]);
</script>

<style scoped></style>
