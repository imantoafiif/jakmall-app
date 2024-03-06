<script setup>
    import Title from './title.vue'
    import checkbox from './checkbox.vue';
    import { ref } from 'vue';

    const isDropshipper = ref(false)
    const name = ref('')
    const address = ref('')

</script>

<template>
    <div class="delivery-container">
        <a>
            <font-awesome-icon icon="arrow-left" />
            Back to Cart
        </a>
        <div class="delivery-container__headers">
            <Title :label="'Delivery Details'"></Title>
            <div>
                <checkbox 
                    @action="() => isDropshipper = !isDropshipper"
                    :value="isDropshipper"
                    :label="'Send as dropshipper'"/>
            </div>
        </div>
        <div class="delivery-container__input-grouping">
            <input placeholder="Name" v-model="name" />
            <input placeholder="Dropshipper Name" v-model="name" />
            <input placeholder="Phone Number" v-model="name" />
            <input placeholder="Dropshipper Phone Number" v-model="name" />
            <div class="delivery-container__input-grouping__textarea-container">
                <textarea 
                    maxlength="120"
                    v-model="address"
                    placeholder="Delivery Address"></textarea>
                <span>{{ address.length }} / 120</span>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .delivery-container 
        display flex
        flex-direction column
        gap 20px
        flex-grow 1

        & > a 
            display flex
            align-items center
            gap 12px
            cursor pointer

        &__headers
            display flex
            justify-content space-between
            align-items center

        &__input-grouping 
            width 100%
            display grid
            grid-template-columns: 1fr 1fr
            gap 24px

            &__textarea-container 
                display flex
                flex-direction column
                gap 6px
                align-items flex-end

                > span 
                    color rgba(0, 0, 0, .4)

            input, 
            textarea
                border 1px solid #CCCCCC
                padding 0 10px
                font-family arial

                &::placeholder
                    font-size 16px
                    font-weight 500
                    color rgba(0, 0, 0, .45)

                &:focus 
                    outline: none

            input   
                height 60px

            textarea
                height 120px
                padding 10px
                width  -webkit-fill-available;
</style>