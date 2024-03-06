<script setup></script>

<template>
    <div class="bc-container">
        <div
            v-for="step in [
                { label: 'Delivery', key: 1 },
                { label: 'Payment', key: 2 },
                { label: 'Finish', key: 3 },
            ]" 
            class="bc-container__steps">
            <div :class="{'bc-container__steps__active': step.key <= 1}">{{ step.key }}</div>
            <span>{{ step.label }}</span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .bc-container 
        display flex
        flex-direction row
        background #FFFAE6
        font-size 16px
        font-weight 500
        gap 65px
        padding 20px 40px
        border-radius 50px

        &__steps 
            display flex
            flex-direction row
            align-items center
            gap 8px

            & > div 
                width 30px
                height 30px
                border-radius 50%
                background #FF8A0033
                display flex
                align-items center
                justify-content center 
                color #FF8A00
                box-shadow 0px 2px 4px #FF8A004D

            &__active 
                background #FF8A00 !important
                color white !important

            & > span 
                color #FF8A00
</style>