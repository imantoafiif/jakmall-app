<script setup>
    import checkbox from './checkbox.vue';
    import Title from './title.vue'

    const test = () => {
        console.log(1)
    }
</script>

<template>
    <div class="container">
        <a>
            <font-awesome-icon icon="arrow-left" />
            Back to Cart
        </a>
        <div class="headers">
            <Title :label="'Delivery details'"></Title>
            <div>
                <checkbox 
                    @click="test"
                    :value="false"
                    :label="'Send as dropshipper'"/>
                <!-- <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> I have a bike</label>    -->
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

        .headers
            display flex
            justify-content space-between
            align-items center

        > a 
            display flex
            flex-direction row
            gap 12px
            align-items center
            cursor pointer
</style>