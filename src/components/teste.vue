<template>
    <div>
        Teste {{ contador }} e 2x contador= {{ if(contador) }} 
        <button @click="incrementar">Incrementa</button>

        <input type="text" v-model="caixa_nome"/>
        <div>
            o valor do atributo caixa_nome é: {{ caixa_nome }}
        </div>
        <button @click="adicionaNome">Adicionar nome</button>
        <div v-for="p in nomes">
            {{ p }}
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            contador: 0,
            nomes: [],
            caixa_nome: ''
        }
    },
    methods: {
        
        incrementar() {
            this.contador++
        },

        adicionaNome() {
            let temp = this.caixa_nome.toUpperCase()
            this.nomes.push(temp)
            this.caixa_nome = ''
        }
    },
}
</script>
<style>
    
</style>