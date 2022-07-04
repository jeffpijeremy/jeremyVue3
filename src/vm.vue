<template>
    <div>
        {{name}} 好棒棒!
        <p></p>
        價格 : {{price}}
        <p></p>
        數量 : {{quantity}}
        <p></p>
        總價 : {{subtotal()}}
        <p></p>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '1234',
            price : 50,
            quantity : 5,
            message: 'Hello'
        }
    },
    methods: {
        subtotal:function(){
            return this.price * this.quantity;
        }
    }
}
</script>