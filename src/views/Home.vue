<template>
  <div class="home">
    <div class="home__elements">
      <div class="home__element" v-for="prj in projects">
        <router-link :to="prj.url">{{ prj.title }}</router-link>
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
          title: 'Triangle Header',
          url: '/header'
        },
        red: {
          title: 'Project red',
          url: '/red'
        },
        cube: {
          title: 'Social cube',
          url: '/cube'
        },
        svg: {
          title: 'Dinamic SVG',
          url: '/cube'
        }
      }
    };
  },
};
</script>

<style lang="sass">
  .home
    background: #4b426d

    .home__elements
      display: grid
      height: 100vh
      grid-template-columns: 1fr 1fr 1fr 1fr

      .home__element
        display: flex

        a
          margin: auto
          color: #aac1d3
          text-decoration: none
          font-size: 20px
          background: #787bae
          padding: 30px 50px
          transition: .5s

          &:hover
            transform: translateY(-15px)

</style>
