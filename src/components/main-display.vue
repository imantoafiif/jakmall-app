<script setup>
    import { usePurchaseOverview } from '../stores/purchaseOverview';
    import breadcrumbs from './breadcrumbs.vue';
    import delivery from './delivery.vue';
    import finish from './finish.vue';
    import payment from './payment.vue';
    import summaries from './summary.vue';
    import { watch, shallowRef, onMounted }  from 'vue';

    const view = shallowRef(delivery)
    const overview = usePurchaseOverview()
    const onProceed = () => {
        console.log(1)
    }

    overview.$subscribe(() => {
        const state = JSON.stringify(overview)
        localStorage.setItem('user-state', state)
        console.log(state)
    }, { detached: true })

    onMounted(() => {
        const state = localStorage.getItem('user-state')
        if(!state) return
        overview.setOverview(JSON.parse(state))
    })

    watch(
        () => overview.page,
        (newValue, oldValue) => {
            switch(newValue) {
                case 1: view.value = delivery; break;
                case 2: view.value = payment; break;
                case 3:
                    overview.setOID() 
                    view.value = finish; 
                break;
            }
        }
    )

</script>

<template>
    <div class="container">
        <breadcrumbs class="container__breadcrumbs"></breadcrumbs>
        <div class="container__pages">
            <keep-alive :max="3">
                <component :is="view"></component>
            </keep-alive>
        </div>
        <summaries @proceed="onProceed()"/>
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