<script setup>
    import mainDisplay from './components/main-display.vue'
</script>

<template>
    <div class="app-container">
        <mainDisplay></mainDisplay>
    </div>
</template>

<style lang="stylus" scoped>
    .app-container
        height 100vh
        display flex
        align-items center
        justify-content center

        > p
            color black
            margin 0
            padding 0
</style>