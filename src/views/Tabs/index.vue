<template>
  <div class="tabs-container">
    <div class="tabs-row">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" v-for="block in blocks" :key="block.index">
            <line   v-for="line in block" 
                    :key="line.index"
                    :y1="line.y" x2="300" :y2="line.y" stroke="#ACACAC" stroke-width="2">
            </line>
            <g v-for="line in block" :key="line.index">
                <text   v-for="point in line.points"
                        :key="point.index"
                        :x="point.x"
                        :y="line.y"
                        dominant-baseline="middle"
                        text-anchor="middle"
                        class="label"
                        fill="black"
                        font-size="14">6</text>
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
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '33',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '50',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '67',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '83',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '100',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                ],
                [
                    {
                        y: '17',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '33',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '50',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '67',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '83',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                    {
                        y: '100',
                        points: [
                            {
                                x: '20',
                                title: '6'
                            }
                        ]
                    },
                ],
            ]
        }
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
        display: flex;
        justify-content: center
        flex-wrap: wrap;


</style>