<script setup>
    const { label } = defineProps(['label'])
</script>
    
<template>
    <div class="title-container">
        <h1>{{ label }}</h1>
        <div></div>
    </div>  
</template>

<style lang="stylus" scoped>
    .title-container
        width max-content
        position relative

        > div 
            height 8px
            background #EEEEEE
            width 100%
            bottom 10px
            position absolute
            z-index -1

        h1
            margin 0
            font-size 36px 
            color #ff8a00
            width max-content
</style>