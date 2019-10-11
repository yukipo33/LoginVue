<template>
  <div>
    <h1>Lista de tareas</h1>
    <router-link :to="{name: 'agregar'}">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="item of tareas" :key="item.id">
        {{item.id}} - {{item.nombre}}
        <div class="float-right">
          <router-link
            class="btn btn-warning btn-sm mr-2"
            :to="{name: 'editar', params:{id: item.id}}"
          >Editar</router-link>
          <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "inicio",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  computed: {
    ...mapState(["usuario", "tareas"])
  },
  created() {
    this.getTareas();
  }
};
</script>