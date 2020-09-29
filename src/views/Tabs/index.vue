<template>
    <div class="tabs">
        <div class="tabs__row">
            <svg height="116"
                 v-for="(block, bIndex) in getBlocks"
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
                    >
                    <line   
                            :y1="line.y" x2="300"
                            :y2="line.y"
                            ref="lines"
                            stroke="#ACACAC"
                            stroke-width="2" 
                            class="line"/>
                    <rect  @click="addPoint(bIndex, lIndex, $event)"
                           :y="line.y - 8"
                           width="300"
                           height="16"
                           fill="#FFEE53"
                           fill-opacity="0.4"
                           ref="rects"
                           class="line-background"/>
                    <g v-for="(point, pIndex) in line.points"
                       :key="pIndex"
                       @click="remPoint({
                                    block: bIndex,
                                    line: lIndex,
                                    index: pIndex})">
                        <rect width="18" height="16" fill="white"
                              :x="point.x - 9" :y="line.y - 8"/>
                        <text   dominant-baseline="middle"
                                text-anchor="middle"
                                class="label"
                                fill="black"
                                :x="point.x" :y="line.y"
                                font-size="14"
                                
                                    >{{ point.title }}</text>
                    </g>
                </g>
            </svg>
        </div>
        <span class="tabs__btn" @click="setBlock">+</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "Tabs",
    data() {
        return {
        
        }
    },
    computed: {
        ...mapGetters('note', [
            'getBlocks',
        ]),
    },
    methods: {
        ...mapActions('note', [
            'setBlock',
            'remPoint'
        ]),
        ...mapActions('modal', [
            'newModal',
        ]),
        addPoint(block, line, e) {
            this.newModal({
                component: 'Note',
                data: {
                    x: e.clientX,
                    y: e.clientY,
                    block: block,
                    line: line,
                    pointX: e.clientX - this.$refs.blocks[block].children[line].getBoundingClientRect().x
                },
            })
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