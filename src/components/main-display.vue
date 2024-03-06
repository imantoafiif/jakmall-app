<script setup>
    import breadcrumbs from './breadcrumbs.vue';
    import delivery from './delivery.vue';
    import payment from './payment.vue';
    import summaries from './summary.vue';
    import { ref } from 'vue';

    const isDropshipper = ref(false)
    const name = ref('')
    const address = ref('')
    const view = ref(payment)
</script>

<template>
    <div class="container">
        <breadcrumbs class="container__breadcrumbs"></breadcrumbs>
        <div class="container__pages">
            <keep-alive :max="3">
                <component :is="view"></component>
            </keep-alive>
            <!-- <delivery></delivery> -->
        </div>
        <summaries></summaries>
    </div>
</template>

<style lang="stylus" scoped>
    .container 
        width 1100px
        height 550px
        background white
        border-radius 4px
        padding 24px
        z-index 0
        display flex
        flex-direction row
        box-shadow 2px 10px 20px 0 #ff8a0020
        position relative

        &__pages
            display flex
            flex-direction column
            gap 20px
            flex-grow 1
            margin-right 20px

        &__breadcrumbs 
            position absolute
            top -35px
            left 50%
            transform: translate(-50%)
</style>