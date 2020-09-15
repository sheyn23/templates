<template>
    <div class="tabs-container">
        <div class="tabs-row">
            <svg fill="none" v-for="(block, bIndex) in blocks" :key="bIndex" ref="blocks">
                <g  v-for="(line, lIndex) in block" 
                    :key="lIndex"
                    @click="addPoint(bIndex, lIndex, $event)"
                    @mouseenter="lightUp(bIndex, lIndex)"
                    @mouseleave="lightDown(bIndex, lIndex)">
                    <rect :y="line.y - 8" width="300" height="16" fill="#FFEE53" fill-opacity="0" ref="rects"/>
                    <line   
                            :y1="line.y" x2="300"
                            :y2="line.y"
                            ref="lines"
                            stroke="#ACACAC"
                            stroke-width="2">
                    </line>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blocks: [
                [
                    {
                        y: '17',
                        points: []
                    },
                    {
                        y: '33',
                        points: []
                    },
                    {
                        y: '49',
                        points: []
                    },
                    {
                        y: '65',
                        points: []
                    },
                    {
                        y: '81',
                        points: []
                    },
                    {
                        y: '97',
                        points: []
                    },
                ],
                [
                    {
                        y: '17',
                        points: []
                    },
                    {
                        y: '33',
                        points: []
                    },
                    {
                        y: '49',
                        points: []
                    },
                    {
                        y: '65',
                        points: []
                    },
                    {
                        y: '81',
                        points: []
                    },
                    {
                        y: '97',
                        points: []
                    },
                ],
            ]
        }
    },
    methods: {
        addPoint(block, line, e) {
            let pointX = e.clientX - this.$refs.blocks[block].children[line].getBoundingClientRect().x;
            this.blocks[block][line].points.push({x: pointX, title: '3'});
        },
        lightUp(bIndex, lIndex) {
            console.log(this.$refs.blocks[bIndex]);;
        },
        lightDown(bIndex, lIndex) {
            // this.$refs.rects[lIndex].style.fillOpacity = '0';
        },
        
    }
}
</script>

<style lang="sass">
.tabs-container
    width: 100vw
    height: 100vh
    background: #FFFFFF

    .tabs-row
        max-width: 1000px
        padding: 20px
        margin: auto
        display: flex
        justify-content: center
        flex-wrap: wrap


</style>