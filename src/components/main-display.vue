<script setup>
    import checkbox from './checkbox.vue';
    import Title from './title.vue'
    import { ref } from 'vue';

    const isDropshipper = ref(false)
    const name = ref('')
    const address = ref('')
</script>

<template>
    <div class="container">
        <a>
            <font-awesome-icon icon="arrow-left" />
            Back to Cart
        </a>
        <div class="container__headers">
            <Title :label="'Delivery details'"></Title>
            <div>
                <checkbox 
                    @action="() => isDropshipper = !isDropshipper"
                    :value="isDropshipper"
                    :label="'Send as dropshipper'"/>
            </div>
        </div>
        <div class="container__input-grouping">
            <input placeholder="Name" v-model="name" />
            <input placeholder="Dropshipper Name" v-model="name" />
            <input placeholder="Phone Number" v-model="name" />
            <input placeholder="Dropshipper Phone Number" v-model="name" />
            <div class="container__input-grouping__textarea-container">
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
    .container 
        width 1100px
        height 550px
        background white
        border-radius 4px
        padding 24px
        z-index 0
        display flex
        flex-direction column
        gap 20px
        box-shadow 2px 10px 20px 0 #ff8a0020

        &__headers
            display flex
            justify-content space-between
            align-items center

        & > a 
            display flex
            flex-direction row
            gap 12px
            align-items center
            cursor pointer

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