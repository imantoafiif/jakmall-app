<script setup>
    import Title from './title.vue'
    import checkbox from './checkbox.vue';
    import { watch } from 'vue';
    import { usePurchaseOverview } from '../stores/purchaseOverview'
    import { storeToRefs } from 'pinia'

    const overview = usePurchaseOverview()
    const { isPhoneValid, isDropshipperPhoneValid, isEmailValid } = storeToRefs(overview)

    const inputHandler = (which) => {
        switch(which) {
            case 'address':
                if(overview.address.value === '') {
                    overview.address.error_code = 0
                    return
                }
                overview.address.error_code = 3
            break;
            case 'dropshipper':
                if(overview.dropshipper.value === '') {
                    overview.dropshipper.error_code = 0
                    return
                }
                overview.dropshipper.error_code = 3
            break;
            case 'dropshipper_phone': 
                if (overview.dropshipper_phone.value === '') {
                    overview.dropshipper_phone.error_code = 0
                } else if (!isDropshipperPhoneValid.value) {
                    overview.dropshipper_phone.error_code = 2
                } else {
                    overview.dropshipper_phone.error_code = 3
                }
            break;
            case 'email':
                if (overview.name.value === '') {
                    overview.name.error_code = 0
                } else if (!isEmailValid.value) {
                    overview.name.error_code = 2
                } else {
                    overview.name.error_code = 3
                }
            break;
            case 'phone': 
                if (overview.phone.value === '') {
                    overview.phone.error_code = 0
                } else if (!isPhoneValid.value) {
                    overview.phone.error_code = 2
                } else {
                    overview.phone.error_code = 3
                }
            break;
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
                overview.setDropshipper({
                    value: null,
                    error_code: 0,
                })
                overview.setDropshipperPhone({
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
                    @action="() => overview.setDropshipStatus(!overview.is_dropshipping)"
                    :value="overview.is_dropshipping"
                    :label="'Send as dropshipper'"/>
            </div>
        </div>
        <div class="delivery-container__input-grouping">
            <div class="delivery-container__input-grouping__template">
                <div
                    :class="{
                        'delivery-container__input-grouping__template__is-danger': overview.name.error_code == 1,
                        'delivery-container__input-grouping__template__is-warning': overview.name.error_code == 2,
                        'delivery-container__input-grouping__template__is-success': overview.name.error_code == 3,
                    }" 
                    class="delivery-container__input-grouping__template__container">
                    <input @input="inputHandler('email')" placeholder="Email" v-model="overview.name.value" />
                    <span v-if="overview.name.error_code > 0"><font-awesome-icon :icon="getIcon(overview.name.error_code)" /></span>
                </div>
                <p v-if="[1, 2].includes(overview.name.error_code)">{{ generateWarning(overview.name.error_code) }}</p>
            </div>
            <div class="delivery-container__input-grouping__template">
                <div
                    :class="{
                        'delivery-container__input-grouping__template__is-danger': overview.dropshipper.error_code == 1,
                        'delivery-container__input-grouping__template__is-warning': overview.dropshipper.error_code == 2,
                        'delivery-container__input-grouping__template__is-success': overview.dropshipper.error_code == 3,
                    }"                          
                    class="delivery-container__input-grouping__template__container">
                    <input @input="inputHandler('dropshipper')" :disabled="!overview.is_dropshipping" placeholder="Dropshipper Name" v-model="overview.dropshipper.value" />
                    <span><font-awesome-icon :icon="getIcon(overview.dropshipper.error_code)" /></span>
                </div>
                <p v-if="[1, 2].includes(overview.dropshipper.error_code)">{{ generateWarning(overview.dropshipper.error_code) }}</p>
            </div>
            <div class="delivery-container__input-grouping__template">
                <div
                    :class="{
                        'delivery-container__input-grouping__template__is-danger': overview.phone.error_code == 1,
                        'delivery-container__input-grouping__template__is-warning': overview.phone.error_code == 2,
                        'delivery-container__input-grouping__template__is-success': overview.phone.error_code == 3,
                    }"                     
                    class="delivery-container__input-grouping__template__container">
                    <input @input="inputHandler('phone')" placeholder="Phone Number" v-model="overview.phone.value" />
                    <span><font-awesome-icon :icon="getIcon(overview.phone.error_code)" /></span>
                </div>
                <p v-if="[1, 2].includes(overview.phone.error_code)">{{ generateWarning(overview.phone.error_code) }}</p>
            </div>
            <div class="delivery-container__input-grouping__template">
                <div
                    :class="{
                        'delivery-container__input-grouping__template__is-danger': overview.dropshipper_phone.error_code == 1,
                        'delivery-container__input-grouping__template__is-warning': overview.dropshipper_phone.error_code == 2,
                        'delivery-container__input-grouping__template__is-success': overview.dropshipper_phone.error_code == 3,
                    }"                           
                    class="delivery-container__input-grouping__template__container">
                    <input @input="inputHandler('dropshipper_phone')" :disabled="!overview.is_dropshipping" placeholder="Dropshipper Phone Number" v-model="overview.dropshipper_phone.value" />
                    <span><font-awesome-icon :icon="getIcon(overview.dropshipper_phone.error_code)" /></span>
                </div>
                <p v-if="[1, 2].includes(overview.dropshipper_phone.error_code)">{{ generateWarning(overview.dropshipper_phone.error_code) }}</p>
            </div>
            <div class="delivery-container__input-grouping__textarea-container">
                <textarea 
                    :class="{
                        'delivery-container__input-grouping__template__is-danger': overview.address.error_code == 1,
                        'delivery-container__input-grouping__template__is-success': overview.address.error_code == 3,
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
                    border 1px solid #CCCCCC

                    & > span 
                        padding 0 10px

                &__is-danger 
                    border 1px solid red !important
                    color red

                &__is-warning 
                    border 1px solid #FF8A00 !important
                    color #FF8A00

                &__is-success
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