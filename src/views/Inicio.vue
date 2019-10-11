<template>
  <div>
    <h1>Ruta Protegida</h1>
    <h2>Bienvenido!: {{ usuario.email }}</h2>
    <h3>{{ usuario.uid }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "inicio",
  data() {
    return {};
  },
  computed: {
    ...mapState(['usuario'])
  }
};
</script>