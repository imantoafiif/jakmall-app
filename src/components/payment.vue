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
                <div>

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

        &__item 
            display flex
            flex-direction column
            justify-content space-between
            gap 20px

            &__list 
                display flex
                flex-direction row

                & > div 
                    width 180px
                    height 60px
                    border 2px solid #1BD97B
</style>