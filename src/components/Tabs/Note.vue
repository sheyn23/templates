<template>
    <div class="note">
        <input class="note__input" type="text" v-model="title">
        <span class="note__btn" @click="addPoint">Add</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Note",
    props: {
        point: {
            type: Object,
            default: {}
        }
    },
    data: () => ({
        title: null,
    }),
    methods: {
        ...mapActions('note', [
            'setPoint',
        ]),
        ...mapActions('modal',[
            'closeModal'
        ]),
        addPoint() {
            console.log(this.point);
            this.setPoint({
                block: this.point.block,
                line: this.point.line,
                title: this.title,
                x: this.point.pointX
            }).then(this.closeModal);
        }
    }
}
</script>

<style scope lang="sass">
.note 
    display: flex
    flex-direction: column
    align-items: center
    
    .note__input
            width: 20px
            height: 20px
            border: 1px solid black
            border-radius: 5px
            padding: 0 5px
            text-align: center

            &:focus
                border-color: #AED4E6

    .note__btn
        padding: 6px 10px
        background: #AED4E6
        border: 1px solid #AED4E6
        border-radius: 5px
        margin: 20px auto
        color: #FFFFFF
        margin: 6px 0 0 0

        &:hover
            cursor: pointer
            background: white
            color: #AED4E6
</style>