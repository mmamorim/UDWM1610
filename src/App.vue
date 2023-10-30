<template>
  <div>
    <h2>
      APP
      <div v-if="userLoged">
        usuário logado
        <button @click="logout" class="btn btn-primary">
          Sair
        </button>
      </div>
      <div v-if="!userLoged">
        <Login />
      </div>
    </h2>
  </div>
</template>

<script>
import Login from "./components/Login.vue"

export default {
  components: { Login },
  data() {
    return {
      userLoged: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {

    async load() {
      console.log("passei no load....");
    },

    login() {

    },

    logout() {

    }

  },
}
</script>

<style></style>