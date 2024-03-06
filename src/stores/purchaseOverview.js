import { defineStore } from "pinia";

export const usePurchaseOverview = defineStore('overview', {
    state: () => {
        return {
            page: 1,
            name: null,
            phone: null,
            address: null,
            is_dropshipping: false,
            dropshipper: null,
            dropshipper_phone: null,
            shipment: { method: 'GO-SEND', value: 15000, id: 'GOJEK' },
            payment: { method: 'e-Wallet', value: 1500000, id: 'EWALLET' },
            order_id: null,
            cost: 500000,
        }
    },
    getters: {
        shipmentMessage() {
            const shipment = 
                this.shipment?.method === 'GO-SEND' ? 'Today' : 
                this.shipment?.method === 'JNE' ?  'In 2 days' :
                'Tomorrow'
            return `${shipment} by ${this.shipment?.method}`
        },
        total() {
            return (
                this.cost + 
                (this.is_dropshipping ? 5900 : 0) +
                (this.page >= 2 ? this.shipment?.value : 0)
            )
        }
    },
    actions: {
        setPage(v) {
            this.page = v
        },
        setShipment(v) {
            this.shipment = v
        },
        setPayment(v) {
            this.payment = v
        },
        setDropshipper(v) {
            this.dropshipper = v
        },
        setDropshipperPhone(v) {
            this.dropshipper_phone = v
        },
        setOID() {
            const characters = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
            this.order_id = ''
            for (let i = 0; i < 5; i++) {
                const i = Math.floor(Math.random() * characters.length);
                this.order_id = `${this.order_id}${characters[i]}`
            }
        },
        setDropshipStatus(v) {
            this.is_dropshipping = v
        },
        resetOverview() {
            this.page = 1
            this.name = null
            this.phone = null
            this.address = null
            this.is_dropshipping = false
            this.dropshipper = null
            this.dropshipper_phone = null
            this.shipment = { method: 'GO-SEND', value: 15000, id: 'GOJEK' }
            this.payment = { method: 'e-Wallet', value: 1500000, id: 'EWALLET' }
            this.order_id = null
            this.cost = 500000
        },
    }
})