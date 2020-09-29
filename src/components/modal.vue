<template>
    <div class="modal" v-if="getModal.length" @click.self="closeModal">
        <div class="modal__row"
             :style="{ top: `${compPos.y}px`,
                       left: `${compPos.x}px` }">
            <component :is="getActiveModal.component"
                       :point="getActiveModal.data"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Note from './../components/Tabs/Note'

export default {
    name: "Modal",
    components: {
        Note,
    },
    data: () => ({
        
    }),
    computed: {
        ...mapGetters('modal',[
            'getModal',
            'getActiveModal',
        ]),
        compPos() {
            let x, y;
            switch (this.getActiveModal.component) {
                case 'Note':
                    x = this.getActiveModal.data.x + 10;
                    y = this.getActiveModal.data.y - 40;
                    break;
                case 'Point':
                    // x = this.getActiveModal.data.x;
                    // y = this.getActiveModal.data.y - 40;
                    break;

                default:
                    break;
            }

            return {
                x,
                y,
            }
        }
    },
    methods: {
        ...mapActions('modal',[
            'closeModal'
        ]),
    },
}
</script>

<style scoped lang="sass">
.modal
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(0, 0, 0, 0.4)

    & .modal__row
        position: absolute
        width: 50px
        background: #FFFFFF
        padding: 10px
        display: flex
        flex-direction: column
        align-items: center
        border-radius: 5px

        &:after
            content: ''
            position: absolute
            left: -20px
            bottom: 30px
            border: 10px solid transparent
            border-right: 10px solid #FFFFFF
</style>