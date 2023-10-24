<template>
    <h2 class="p-1 m-1 rounded bg-gray-200">
        <span class="text-lg border bg-white">
            {{ icon }}
        </span>
        {{ title }}
    </h2>
</template>
<script>
export default {
    props: {
        title: { default: "sem título" }, 
        icon: {}
    }
}
</script>
<style lang="">
    
</style>