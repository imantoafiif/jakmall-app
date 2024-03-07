import { defineStore } from "pinia";

export const usePurchaseOverview = defineStore('overview', {
    //error code
    //0 -> no error / empty input
    //1 -> wrong input
    //2 -> input accepted
    state: () => {
        return {
            page: 1,
            name: {
                value: '',
                error_code: 0,
            },
            phone: {
                value: '',
                error_code: 0,
            },
            address: {
                value: '',
                error_code: 0,
            },
            is_dropshipping: false,
            dropshipper: {
                value: '',
                error_code: 0,
            },
            dropshipper_phone: {
                value: '',
                error_code: 0,
            },
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
        },
        isPhoneValid() {
            const pattern = /^[\d\-\+\(\)]{6,20}$/
            if(this.phone.value == '') return false
            return pattern.test(this.phone.value)
        },
        isEmailValid() {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return pattern.test(this.name.value)
        },
        isAddressValid() {
            return this.address.value !== ''
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
        setOverview({
            page,
            name,
            phone,
            address,
            is_dropshipping,
            dropshipper,
            dropshipper_phone,
            shipment,
            payment,
            order_id,
            cost,
        }) {
            this.page = page
            this.name = name
            this.phone = phone
            this.address = address
            this.is_dropshipping = is_dropshipping
            this.dropshipper = dropshipper
            this.dropshipper_phone = dropshipper_phone
            this.shipment = shipment
            this.payment = payment
            this.order_id = order_id
            this.cost = cost
        },
    }
})