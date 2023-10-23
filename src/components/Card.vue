<template>
    <div class="border p-1 m-1 rounded">
        <Card_title title="Algum título legal" icon="xxx"/>
        <div class="p-1 m-1">
            Alguma coisa aqui
        </div>
        <div class="p-1 m-1">
            <button class="btn btn-primary">
                Clique aqui
            </button>
        </div>
    </div>
</template>
<script>
import Card_title from './Card_title.vue';

export default {
    components: { Card_title }
}
</script>
<style>
    
</style>