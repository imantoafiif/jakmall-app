<script setup>
    import Title from './title.vue' 
    import { usePurchaseOverview } from '../stores/purchaseOverview'
    import { storeToRefs } from 'pinia'

    const overview = usePurchaseOverview()
    const { shipmentMessage } = storeToRefs(overview)
    
    localStorage.removeItem('user-state')
</script>

<template>
    <div class="finish-container">
        <div class="finish-container__main">
            <Title :label="'Thank you'"></Title>
            <p>Order ID : {{ overview.order_id }}</p>
            <p>Your order will be delivered {{ shipmentMessage }}</p>
            <a @click="() => overview.setOverview(
                {
                    page: 1,
                    name: { value: '', error_code: 0 },
                    phone: { value: '', error_code: 0 },
                    address: { value: '', error_code: 0 },
                    is_dropshipping: false,
                    dropshipper: { value: '', error_code: 0 },
                    dropshipper_phone: { value: '', error_code: 0 },
                    shipment: { method: 'GO-SEND', value: 15000, id: 'GOJEK' },
                    payment: { method: 'e-Wallet', value: 1500000, id: 'EWALLET' },
                    order_id: null,
                    cost: 500000,
                }
            )">
                <font-awesome-icon icon="arrow-left" />
                Back to Homepage
            </a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .finish-container
        display flex
        flex-direction column
        height 100%
        align-items center
        justify-content center

        &__main 
            & > p 
                margin 0

                &:nth-child(2) 
                    margin-top 20px

            & > a
                margin-top 50px
                display flex
                align-items center
                gap 12px
                cursor pointer
</style>