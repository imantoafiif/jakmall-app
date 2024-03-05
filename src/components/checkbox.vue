<script setup>
    const { label, value } = defineProps(['label', 'value'])
</script>

<template>
    <div
        @click="$emit('action')" 
        class="checkbox-container">
        <div>
            <font-awesome-icon 
                v-if="value"
                icon="check" />
        </div>
        <span>{{ label }}</span>
    </div>
</template>

<style lang="stylus" scoped>
    .checkbox-container 
        display flex
        flex-direction row
        gap 8px
        cursor pointer

        > div 
            width 18px
            height 18px
            border 2px solid #1bd97b
            display flex
            align-items center
            justify-content center

        > span 
            color #2D2A40
</style>