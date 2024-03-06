<script setup>
    import { usePurchaseOverview } from '../stores/purchaseOverview';

    const overview = usePurchaseOverview()
</script>

<template>
    <div class="summary-container">
        <div class="summary-container__head">
            <h1>Summary</h1>
            <p>10 items purchased</p>
        </div>
        <div class="summary-container__bottom">
            <p>
                <span>Cost of goods</span>
                <strong>500,000</strong>
            </p>
            <p>
                <span>Dropshipping fee</span>
                <strong>5,900</strong>
            </p>    
            <h1>
                <strong>Total</strong>
                <strong>505,900</strong>
            </h1>
            <button 
                v-if="overview.page < 3"
                @click="() => overview.setPage(overview.page + 1)">
                Continue to Payment
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

        &__head
            & > h1 
                font-weight 600
                color #FF8A00
                margin 0
            
            & > p 
                margin 4px 0

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