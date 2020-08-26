<template>
  <div class="home">
    <div class="home__elements">
      <div class="element" v-for="prj in projects"
                           :key="prj.id"
                           @click="$router.push(prj.url)">
        <div class="element__back">
          fsdfsdfsdfsdf
        </div>
        <div class="element__front">
          <img class="element__img" src="../assets/cube.png" alt="img">
          <h3 class="element__title">{{ prj.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      projects: {
        header: {
          id: 0,
          title: 'Triangle Header',
          url: '/header'
        },
        red: {
          id: 1,
          title: 'Project red',
          url: '/red'
        },
        cube: {
          id: 2,
          title: 'Social cube',
          url: '/cube'
        },
        svg: {
          id: 3,
          title: 'SVG map',
          url: '/map'
        }
      }
    };
  },
  methods: {

  }
};
</script>

<style lang="sass">
  .home
    height: 100vh
    padding-top: 20px

    .home__elements
      width: 1200px
      margin: auto
      display: grid
      grid-template-columns: 1fr 1fr 1fr 1fr
      grid-gap: 20px

      .element
        height: 300px
        position: relative
        transition: .5s
        transform-style: preserve-3d

        &:hover
          cursor: pointer
          transform: rotateY(180deg)

        .element__back
          background: white
          width: 100%
          height: 100%
          transform: rotateY(180deg) translateZ(1px)
          position: absolute
          top: 0
          left: 0
          z-index: 50

        .element__front
          background: white
          width: 100%
          height: 100%
          display: grid
          place-items: center
          z-index: 100
          overflow: hidden

          .element__img
            width: 100%
            height: 100%
            object-fit: cover
            filter: blur(4px)

          .element__title
            position: absolute
</style>
