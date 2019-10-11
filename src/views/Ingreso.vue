<template>
  <div>
    <h1>Ingreso de usuarios</h1>
    <form @submit.prevent="ingresoUsuario({email, password})">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">Acceder</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ingreso",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"])
  },
  computed:{
      ...mapState(["error"])
  }
};
</script>