<script setup>
    import Title from './title.vue'
</script>

<template>
    <div class="payment-container">
        <a>
            <font-awesome-icon icon="arrow-left" />
            Back to Delivery
        </a>
        <div class="payment-container__item">
            <Title :label="'Shipment'"></Title>
            <div class="payment-container__item__list">
                <div
                    :class="{'payment-container__item__list__active': item.method == 'GO-JEK'}" 
                    v-for="item in [
                        { method: 'GO-JEK', price: 15000 },
                        { method: 'JNE', price: 9000 },
                        { method: 'Personal Courier', price: 29000 },
                    ]">
                    <span>{{ item.method }}</span>
                    <strong>{{ item.price }}</strong>
                </div>
            </div>
        </div>
        <div class="payment-container__item">
            <Title :label="'Payment'"></Title>
            <div class="payment-container__item__list">
                <div
                    :class="{'payment-container__item__list__active': i == 1}" 
                    v-for="i in 3">

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
                    width 180px
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