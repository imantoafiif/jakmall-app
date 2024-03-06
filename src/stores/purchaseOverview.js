import { defineStore } from "pinia";

export const usePurchaseOverview = defineStore('overview', {
    state: () => {
        return {
            page: 1,
            name: null,
            phone: null,
            address: null,
            dropshipper: null,
            dropshipper_phone: null,
            shipment: null,
            payment: null,
            order_id: null,
        }
    },
    actions: {
        setPage(v) {
            this.page = v
        },
        setOID() {
            const characters = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
            this.order_id = ''
            for (let i = 0; i < 5; i++) {
                const i = Math.floor(Math.random() * characters.length);
                this.order_id = `${this.order_id}${characters[i]}`
            }
        }
    }
})