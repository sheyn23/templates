<template>
    <div class="tabs">
        <div class="tabs__row">
            <svg height="116"
                 v-for="(block, bIndex) in blocks"
                 :key="bIndex"
                 ref="blocks">
                <line y2="116" stroke="#AED4E6"
                      stroke-width="4" />
                <text x="10" y="10"
                      dominant-baseline="middle"
                      text-anchor="middle"
                      fill="grey"
                      font-size="12"
                      >{{ bIndex + 1 }}</text>
                <g  v-for="(line, lIndex) in block" 
                    :key="lIndex"
                    @click="addPoint(bIndex, lIndex, $event)">
                    <line   
                            :y1="line.y" x2="300"
                            :y2="line.y"
                            ref="lines"
                            stroke="#ACACAC"
                            stroke-width="2" 
                            class="line"/>
                    <rect :y="line.y - 8"
                           width="300"
                           height="16"
                           fill="#FFEE53"
                           fill-opacity="0.4"
                           ref="rects"
                           class="line-background"/>
                </g>
                <g v-for="line in block" :key="line.index">
                    <text   v-for="point in line.points"
                            :key="point.index"
                            :x="point.x"
                            :y="line.y"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            class="label"
                            fill="black"
                            font-size="14">{{ point.title }}</text>
                </g>
            </svg>
            <div class="tabs__modal" v-if="" @click.self="closeNote">
                <div class="tabs__modal-container">
                    <input class="tabs__input" type="text">
                    <!-- <span class="tabs__btn" @click="addPoint()">Add</span> -->
                </div>
            </div>
        </div>
        <span class="tabs__btn" @click="addBlock()">+</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            blocks: [
                [
                    {
                        y: '25',
                        points: []
                    },
                    {
                        y: '41',
                        points: []
                    },
                    {
                        y: '57',
                        points: []
                    },
                    {
                        y: '73',
                        points: []
                    },
                    {
                        y: '89',
                        points: []
                    },
                    {
                        y: '105',
                        points: []
                    },
                ],
                [
                    {
                        y: '25',
                        points: []
                    },
                    {
                        y: '41',
                        points: []
                    },
                    {
                        y: '57',
                        points: []
                    },
                    {
                        y: '73',
                        points: []
                    },
                    {
                        y: '89',
                        points: []
                    },
                    {
                        y: '105',
                        points: []
                    },
                ],
            ]
        }
    },
    actions: {
        ...mapGetters('note', [
            'getNote',
            'getNoteTitle'
        ]),
    },
    methods: {
        ...mapActions('note', [
            'setNoteTitle',
            'closeNote',
        ]),
        addPoint(block, line, e) {
            let pointX = e.clientX - this.$refs.blocks[block].children[line]
            .getBoundingClientRect().x;
            this.blocks[block][line].points.push({x: pointX, title: '3'});
        },
        addBlock() {
            this.blocks.push([
                    { y: '25', points: [] },
                    { y: '41', points: [] },
                    { y: '57', points: [] },
                    { y: '73', points: [] },
                    { y: '89', points: [] },
                    { y: '105', points: [] },
                ]);
        },
    }
}
</script>

<style lang="sass">
.tabs
    width: 100vw
    height: 100vh
    background: #FFFFFF
    display: flex
    flex-direction: column

    .tabs__row
        max-width: 1000px
        padding: 20px
        margin: auto
        display: flex
        align-items: center
        justify-content: center
        flex-wrap: wrap

        .line:hover > .line-backgound
            fill-opacity: 0.4

        .line-background
            fill-opacity: 0

            &:hover
                fill-opacity: 0.4

        .tabs__modal
            position: absolute
            top: 0
            bottom: 0
            left: 0
            right: 0
            background: rgba(0, 0, 0, 0.4)

            & .tabs__modal-container
                width: 50px
                background: #FFFFFF
                padding: 10px
                display: flex
                flex-direction: column
                align-items: center
                border-radius: 5px

                & .tabs__input
                    width: 20px
                    height: 20px
                    border: 1px solid black
                    border-radius: 5px
                    padding: 0 5px
                    text-align: center

                    &:focus
                        border-color: #AED4E6

                & .tabs__btn
                    margin: 5px 0 0 0


    .tabs__btn         
        padding: 6px 10px
        background: #AED4E6
        border: 1px solid #AED4E6
        border-radius: 5px
        margin: 20px auto
        color: #FFFFFF

        &:hover
            cursor: pointer
            background: white
            color: #AED4E6
</style>