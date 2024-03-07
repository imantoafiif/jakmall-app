<script setup>
    import Title from './title.vue'
    import { usePurchaseOverview } from '../stores/purchaseOverview';

    const overview = usePurchaseOverview()
</script>

<template>
    <div class="payment-container">
        <a @click="() => overview.setter('page', overview.page - 1)">
            <font-awesome-icon icon="arrow-left" />
            Back to Delivery
        </a>
        <div class="payment-container__item">
            <Title :label="'Shipment'"></Title>
            <div class="payment-container__item__list">
                <div
                    @click="() => overview.setter('shipment', item)"
                    :class="{'payment-container__item__list--active': overview.shipment?.id == item.id}" 
                    v-for="item in [
                        { method: 'GO-SEND', value: 15000, id: 'GOJEK' },
                        { method: 'JNE', value: 9000, id: 'JNE' },
                        { method: 'Personal Courier', value: 29000, id: 'COURIER' },
                    ]">
                    <div class="payment-container__item__list__left">
                        <span>{{ item.method }}</span>
                        <strong>{{ item.value }}</strong>
                    </div>
                    <font-awesome-icon v-if="overview.shipment?.id == item.id" icon="check" />
                </div>
            </div>
        </div>
        <div class="payment-container__item">
            <Title :label="'Payment'"></Title>
            <div class="payment-container__item__list">
                <div
                    @click="() => overview.setter('payment', item)"
                    :class="{'payment-container__item__list--active': overview.payment?.id == item.id}" 
                    v-for="item in [
                        { method: 'e-Wallet', value: 1500000, id: 'EWALLET' },
                        { method: 'Bank Transfer', value: null, id: 'BANKTF' },
                        { method: 'Virtual Account', value: null, id: 'VA' },
                    ]">
                    <div class="payment-container__item__list__left">
                        <span>{{ item.method }}</span>
                        <strong>
                            {{ item.value }}
                            {{ item.value ? 'left' : '' }}
                        </strong>
                    </div>
                    <font-awesome-icon v-if="overview.payment?.id == item.id" icon="check" />
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
                justify-content space-between
                gap 15px

                @media screen and (max-width: 992px) 
                    flex-direction column

                &__left
                    display flex
                    flex-direction column

                & > div
                    // width 180px
                    width 33%
                    height 60px
                    border 1px solid #CCCCCC
                    cursor pointer
                    display flex
                    flex-direction row
                    justify-content center
                    align-items center
                    font-weight 500
                    justify-content space-between
                    padding 0 10px

                    @media screen and (max-width: 992px) 
                        width auto

                    & > strong
                        font-size 16px

                &--active
                    border 1px solid #1BD97B !important
                    background #1BD97B1A

            &:last-child
                margin-top 30px
</style>