<script setup></script>

<template>
    <div class="summary-container">
        <div class="summary-container__head">
            <h1>Summary</h1>
            <p>10 items purchased</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .summary-container
        display flex
        flex-direction column
        width 250px
        border-left 2px solid #FF8A001A
        padding 0 25px
        margin-top 45px

        &__head
            & > h1 
                font-weight 600
                color #FF8A00
                margin 0
            
            & > p 
                margin 8px 0
</style>