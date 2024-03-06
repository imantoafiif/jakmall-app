import { defineStore } from "pinia";

export const usePurchaseOverview = defineStore('overview', {
    state: () => {
        return {
            page: 1,
        }
    },
    actions: {
        setPage(v) {
            this.page = v
        }
    }
})