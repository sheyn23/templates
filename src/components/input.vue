<template>
    <div class="form-control">
        <input
            class="form-input"
            :value="value"
            :placeholder="placeholder"
            @input="emitVal"
        >
    </div>
</template>

<script>
    export default {
        name: "Input",
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
        },
        methods:{
            emitVal: function (e) {
                this.$emit('input', e.target.value);
            }
        },
    }
</script>

<style lang="sass">
.form-input
    background: #FFFFFF
    border: 1px solid #303030
    padding: 10px
    border-radius: 5px

    &:focus,
    &:focus > &::placeholder
        border-color: #ee986d
        color: #ee986d
</style>