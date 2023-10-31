<template>
  <div>
    <h2>
      APP
      <div v-if="userLoged">
        usuário {{ user.name }} logado
        <button @click="logout" class="btn btn-primary">
          Sair
        </button>
      </div>
      <div v-if="!userLoged">
        <Login @onLogin="login"/>
      </div>
    </h2>
  </div>
</template>

<script>
import Login from "./components/Login.vue"
import model from "./Model/Model"

export default {
  components: { Login },
  data() {
    return {
      userLoged: false,
      user: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {

    async load() {
      console.log("passei no load....");
      model.init()
      let data = localStorage.getItem("user")
      if(data == null) {
        this.userLoged = false
      } else {
        this.userLoged = true
        this.user = JSON.parse(data)
      }
    },

    login(user) {
      this.user = user
      this.userLoged = true
    },

    logout() {
      localStorage.removeItem("user")
      this.userLoged = false
    }

  },
}
</script>

<style></style>