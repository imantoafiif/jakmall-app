<script setup>
    import Title from './title.vue'
    import checkbox from './checkbox.vue';
    import { watch } from 'vue';
    import { usePurchaseOverview } from '../stores/purchaseOverview'

    const overview = usePurchaseOverview()

    const inputHandler = (which) => {
        if(['address', 'dropshipper'].includes(which)) {
            if(overview[which].value === '') {
                overview[which].error_code = 0
                return
            }
            overview[which].error_code = 3
        } else {
            if (overview[which].value === '') {
                overview[which].error_code = 0
            } else if (!overview.isFormatValid(which)) {
                overview[which].error_code = 2
            } else {
                overview[which].error_code = 3
            }
        }
    }

    const getIcon = which => {
        switch(which) {
            case 1: return 'times'
            case 2: return 'exclamation'
            case 3: return 'check'
        }
    }

    const generateWarning = which => {
        switch(which) {
            case 1: return 'This field is required'
            case 2: return 'Wrong input format'
        }
    }

    watch(
        () => overview.is_dropshipping,
        (newValue, oldValue) => {
            if(!newValue) {
                overview.setter('dropshipper', {
                    value: null,
                    error_code: 0,
                })
                overview.setter('dropshipper_phone', {
                    value: null,
                    error_code: 0,
                })
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
                    @action="() => overview.setter('is_dropshipping', !overview.is_dropshipping)"
                    :value="overview.is_dropshipping"
                    :label="'Send as dropshipper'"/>
            </div>
        </div>
        <div class="delivery-container__input-grouping">
            <div
                v-for="item in [
                    { placeholder: 'Email', value: 'name' },
                    { placeholder: 'Dropshipper Name', value: 'dropshipper' },
                    { placeholder: 'Phone Number', value: 'phone' },
                    { placeholder: 'Dropshipper Phone Number', value: 'dropshipper_phone' },
                ]" 
                class="delivery-container__input-grouping__template">
                <div
                    :class="{
                        'delivery-container__input-grouping__template--is-danger': overview[item.value].error_code == 1,
                        'delivery-container__input-grouping__template--is-warning': overview[item.value].error_code == 2,
                        'delivery-container__input-grouping__template--is-success': overview[item.value].error_code == 3,
                    }"                           
                    class="delivery-container__input-grouping__template__container">
                    <input 
                        @input="inputHandler(item.value)" 
                        :disabled="['dropshipper', 'dropshipper_phone'].includes(item.value) && !overview.is_dropshipping" 
                        :placeholder="item.placeholder" 
                        v-model="overview[item.value].value" />
                    <span v-if="overview.dropshipper_phone.error_code > 0"><font-awesome-icon :icon="getIcon(overview[item.value].error_code)" /></span>
                </div>
                <p v-if="[1, 2].includes(overview[item.value].error_code)">{{ generateWarning(overview[item.value].error_code) }}</p>
            </div> 
            <div class="delivery-container__input-grouping__textarea-container">
                <textarea 
                    :class="{
                        'delivery-container__input-grouping__template--is-danger': overview.address.error_code == 1,
                        'delivery-container__input-grouping__template--is-success': overview.address.error_code == 3,
                    }"          
                    @input="inputHandler('address')"                
                    maxlength="120"
                    v-model="overview.address.value"
                    placeholder="Delivery Address"></textarea>
                <p>
                    <span>{{ overview.address.value.length }} / 120</span>
                    <span v-if="[1, 2].includes(overview.address.error_code)">{{ generateWarning(overview.address.error_code) }}</span>
                </p>
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

            @media screen and (max-width: 992px) 
                flex-direction column
                align-items flex-start
                gap 20px

        &__input-grouping 
            width 100%
            display grid
            grid-template-columns: 1fr 1fr
            gap 24px

            @media screen and (max-width: 992px) 
                grid-template-columns: 1fr


            &__template 
                display flex
                flex-direction column        

                &__container
                    display flex
                    flex-direction row   
                    align-items center 
                    border 1px solid #CCCCCC

                    & > span 
                        padding 0 10px

                &--is-danger 
                    border 1px solid red !important
                    color red

                &--is-warning 
                    border 1px solid #FF8A00 !important
                    color #FF8A00

                &--is-success
                    border 1px solid #1BD97B !important
                    color #1BD97B

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

                > p 
                    display flex
                    justify-content space-between
                    color rgba(0, 0, 0, .4)
                    margin-top 2px

                    & > span:nth-child(2)
                        color red
                        font-weight 500

            input, 
            textarea
                // border 1px solid #CCCCCC
                color black
                border none
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
                border 1px solid #CCCCCC
                height 120px
                padding 10px
                width  -webkit-fill-available;
</style>