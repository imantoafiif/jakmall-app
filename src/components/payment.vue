<script setup>
    import Title from './title.vue'
    import { usePurchaseOverview } from '../stores/purchaseOverview';
    import { watch }  from 'vue';

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
                    @click="() => overview.setShipment(item)"
                    :class="{'payment-container__item__list__active': overview.shipment?.id == item.id}" 
                    v-for="item in [
                        { method: 'GO-SEND', value: 15000, id: 'GOJEK' },
                        { method: 'JNE', value: 9000, id: 'JNE' },
                        { method: 'Personal Courier', value: 29000, id: 'COURIER' },
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
                    @click="() => overview.setPayment(item)"
                    :class="{'payment-container__item__list__active': overview.payment?.id == item.id}" 
                    v-for="item in [
                        { method: 'e-Wallet', value: 1500000, id: 'EWALLET' },
                        { method: 'Bank Transfer', value: null, id: 'BANKTF' },
                        { method: 'Virtual Account', value: null, id: 'VA' },
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
                    border 1px solid #1BD97B !important
                    background #1BD97B1A

            &:last-child
                margin-top 30px
</style>