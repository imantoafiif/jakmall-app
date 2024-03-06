<script setup>
    import Title from './title.vue'
    import { usePurchaseOverview } from '../stores/purchaseOverview';

    const overview = usePurchaseOverview()
</script>

<template>
    <div class="payment-container">
        <a @click="() => overview.setPage(overview.page - 1)">
            <font-awesome-icon icon="arrow-left" />
            Back to Delivery
        </a>
        <div class="payment-container__item">
            <Title :label="'Shipment'"></Title>
            <div class="payment-container__item__list">
                <div
                    :class="{'payment-container__item__list__active': item.method == 'GO-JEK'}" 
                    v-for="item in [
                        { method: 'GO-JEK', value: 15000 },
                        { method: 'JNE', value: 9000 },
                        { method: 'Personal Courier', value: 29000 },
                    ]">
                    <span>{{ item.method }}</span>
                    <strong>{{ item.value }}</strong>
                </div>
            </div>
        </div>
        <div class="payment-container__item">
            <Title :label="'Payment'"></Title>
            <div class="payment-container__item__list">
                <div
                    :class="{'payment-container__item__list__active': item.method == 'e-Wallet'}" 
                    v-for="item in [
                        { method: 'e-Wallet', value: 1500000 },
                        { method: 'Bank Transfer', value: null },
                        { method: 'Virtual Account', value: null },
                    ]">
                    <span>{{ item.method }}</span>
                    <strong>
                        {{ item.value }}
                        {{ item.value ? 'left' : '' }}
                    </strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .payment-container
        display flex
        flex-direction column
        gap 20px
        flex-grow 1

        & > a 
            display flex
            align-items center
            gap 12px
            cursor pointer

        &__item 
            display flex
            flex-direction column
            justify-content space-between
            gap 20px

            &__list 
                display flex
                flex-direction row
                gap 15px

                & > div
                    // width 180px
                    width 33%
                    height 60px
                    border 1px solid #CCCCCC
                    cursor pointer
                    display flex
                    flex-direction column
                    justify-content center
                    font-weight 500
                    padding 0 10px

                    & > strong
                        font-size 16px

                &__active
                    border 2px solid #1BD97B !important
                    background #1BD97B1A

            &:last-child
                margin-top 30px
</style>