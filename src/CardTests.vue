<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <div class="grid grid-cols-3">
      <div v-for="item in cards">
        <Card :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card/Card.vue"

export default {
  components: { Card },
  data() {
    return {
      title: "Meus cartões",
      cards: [
        { title: 'Banana', icon: 'XX', body: 'texto do corpo' },
        { title: 'Abacate', icon: 'XX', body: 'dsdsdsd' },
        { title: 'Cebola', icon: 'XX', body: 'erererer' },
        { title: 'Agrião', icon: 'XX', body: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.' },
      ]
    }
  },
}
</script>

<style></style>