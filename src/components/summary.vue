<script setup>
    import { usePurchaseOverview } from '../stores/purchaseOverview'
    import { storeToRefs } from 'pinia'

    const overview = usePurchaseOverview()
    const { shipmentMessage, total } = storeToRefs(overview)

    const buttonMessage = () => {
        switch(overview.page) {
            case 1: return 'Continue to Payment'
            case 2: return `Pay with ${overview.payment?.method}`
        }
    }
</script>

<template>
    <div class="summary-container">
        <div class="summary-container__head">
            <div class="summary-container__head__item">
                <h1>Summary</h1>
                <p>10 items purchased</p>
            </div>
            <div
                v-if="overview.page >= 2" 
                class="summary-container__head__item">
                <hr/>
                <p>Delivery Estimation</p>
                <p class="summary-container__head__item__purchased">
                    {{ shipmentMessage }}
                </p>
            </div>
            <div
                v-if="overview.page >= 3" 
                class="summary-container__head__item">
                <hr/>
                <p>Payment Method</p>
                <p class="summary-container__head__item__purchased">
                    {{ overview.payment?.method }}
                </p>
            </div>
        </div>
        <div class="summary-container__bottom">
            <p>
                <span>Cost of goods</span>
                <strong>{{ overview.cost }}</strong>
            </p>
            <p v-if="overview.is_dropshipping">
                <span>Dropshipping fee</span>
                <strong>5900</strong>
            </p>    
            <p v-if="overview.page >= 2">
                <span>{{ overview.shipment?.method }} shipment</span>
                <strong>{{ overview.shipment?.value }}</strong>
            </p>    
            <h1>
                <strong>Total</strong>
                <strong>{{ total }}</strong>
            </h1>
            <!-- <button 
                v-if="overview.page < 3"
                @click="() => overview.setPage(overview.page + 1)">
                {{ buttonMessage() }}
            </button> -->
            <button 
                v-if="overview.page < 3"
                @click="$emit('proceed')">
                {{ buttonMessage() }}
            </button>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .summary-container
        display flex
        flex-direction column
        width 280px
        border-left 2px solid #FF8A001A
        padding-left 25px
        margin-top 45px
        justify-content space-between

        @media screen and (max-width: 992px) 
            border-left none
            padding-left 0
            width 100%

        &__head
            display flex
            flex-direction column

            &__item
                & > h1 
                    font-weight 600
                    color #FF8A00
                    margin 0
                
                & > p 
                    margin 4px 0

                & > hr 
                    border-top 1px solid #D8D8D8
                    margin 20px 0

                &__purchased
                    font-size 16px
                    color #1BD97B
                    font-weight 600

        &__bottom
            & > button 
                height 60px
                width 100%
                font-size 18px
                border none
                background #FF8A00
                font-weight 500
                color white
                margin-top 18.76px
                cursor pointer
                font-weight 600

            & > p
                display flex
                flex-direction row
                justify-content space-between
                margin 8px 0

            & > h1 
                display flex
                flex-direction row
                justify-content space-between
                margin-top 18.76px
                margin-bottom 0

                & > strong 
                    font-size 24px
                    color #FF8A00
</style>