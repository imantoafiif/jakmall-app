<script setup>
    import Title from './title.vue'
    import checkbox from './checkbox.vue';
    import { ref, watch } from 'vue';
    import { usePurchaseOverview } from '../stores/purchaseOverview'

    const address = ref('')
    const overview = usePurchaseOverview()

    watch(
        () => overview.is_dropshipping,
        (newValue, oldValue) => {
            if(!newValue) {
                overview.setDropshipper(null)
                overview.setDropshipperPhone(null)
            }
        }
    )
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
                    @action="() => overview.setDropshipStatus(!overview.is_dropshipping)"
                    :value="overview.is_dropshipping"
                    :label="'Send as dropshipper'"/>
            </div>
        </div>
        <div class="delivery-container__input-grouping">
            <div class="delivery-container__input-grouping__template">
                <div class="delivery-container__input-grouping__template__container">
                    <input placeholder="Email" v-model="overview.name.value" />
                    x
                </div>
                <p v-if="overview.name.error_code == 1">This field is required</p>
            </div>
            <div class="delivery-container__input-grouping__template">
                <div class="delivery-container__input-grouping__template__container">
                    <input placeholder="Phone Number" v-model="overview.name.value" />
                    x
                </div>
                <p v-if="overview.name.error_code == 1">This field is required</p>
            </div>
            <!-- <input :disabled="!overview.is_dropshipping" placeholder="Dropshipper Name" v-model="overview.dropshipper" /> -->
            <input placeholder="Phone Number" v-model="overview.phone.value" />
            <input :disabled="!overview.is_dropshipping" placeholder="Dropshipper Phone Number" v-model="overview.dropshipper_phone" />
            <div class="delivery-container__input-grouping__textarea-container">
                <textarea 
                    maxlength="120"
                    v-model="overview.address.value"
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

            &__template 
                display flex
                flex-direction column        

                &__container
                    display flex
                    flex-direction row   
                    align-items center 

                &__is-danger 
                    border: 1px solid red !important

                & > p
                    margin-top 6px
                    margin-bottom 0
                    text-align right
                    font-weight 500
                    color red    

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
                font-size 16px
                font-weight 600
                width 100%

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