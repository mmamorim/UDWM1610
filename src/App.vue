<template>
  <div>
    <h2>
      Teste de persistência
    </h2>
    <div class="m-1 p-1 border rounded">
      <div class="bg-gray-200 p-1">
        você gosta de 
        <span class="p-1 rounded bg-orange-200">
          {{ fruta }}
        </span>
      </div>
      <span class="text-lg mr-1">Nome da fruta prefrida:</span>
      <input type="text" v-model="caixaFruta" class="border p-1 m-1"/>
      <button @click="salvarFruta" class="btn btn-primary">Alterar fruta</button>
    </div>
  </div>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      fruta: "Não sei",
      caixaFruta: "Alguma coisa"
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    
    async load() {
      console.log("passei no load....");
      let valor = localStorage.getItem("FrutaPreferida")
      console.log("valor",valor)
      if(valor == null) {
        this.fruta = "não sei"
      } else {
        this.fruta = valor
      }
    },

    salvarFruta() {
      console.log("salvarFruta",this.caixaFruta)
      localStorage.setItem("FrutaPreferida",this.caixaFruta)
      this.fruta = this.caixaFruta
    }
  },
}
</script>

<style></style>