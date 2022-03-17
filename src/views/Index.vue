<template>
    <h1>TSTL</h1>
    <h2>Typscript STL</h2>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    msg: string;
}>(), {})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
