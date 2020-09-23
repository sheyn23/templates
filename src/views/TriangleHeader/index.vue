<template>
  <header>
    <back />
    <div class="header__left">
      <div class="header__tgl-first"></div>
      <div class="header__tgl-second"></div>
    </div>
    <div class="header__right">
      <div class="header__tgl-thread"></div>
      <div class="header__tgl-four"></div>
    </div>
    <div class="header__content">
      <p class="block">Content!!!</p>
    </div>
  </header>
</template>

<script>
import Back from "@/components/backToHome";

export default {
  name: 'TriangleHeader',
  components: {
    Back,
  }
};
</script>

<style lang="sass">
  $shadow: 0 0 30px rgba(0,0,0,0.5)

  header
    background: #ffffff
    height: 100vh
    overflow: hidden
    position: relative

    .header__left
      float: left
      /* background: #808080; */
      height: 100%
      width: 40%
      position: relative

      .header__tgl-first
        width: 800px
        height: 1400px
        background: #60b8e6
        transform: rotateZ(-30deg)
        position: absolute
        right: 226px
        bottom: -294px
        box-shadow: $shadow

      .header__tgl-second
        width: 800px
        height: 1400px
        background: #297fb8
        transform: rotateZ(-30deg)
        position: absolute
        right: 297px
        bottom: -294px
        box-shadow: $shadow
        z-index: 300

    .header__right
      float: right
      /* background: #505050; */
      height: 100%
      width: 60%
      position: relative
      right: 0

      .header__tgl-thread
        width: 800px
        height: 2000px
        background: #8d44ad
        transform: rotateZ(50deg)
        position: absolute
        left: 500px
        bottom: -662px
        box-shadow: $shadow
        z-index: 200

      .header__tgl-four
        width: 800px
        height: 2000px
        background: #9c55bd
        transform: rotateZ(50deg)
        position: absolute
        left: 230px
        bottom: -662px
        box-shadow: $shadow
        z-index: 100


    .header__content
      position: absolute
      display: flex
      right: 0
      left: 0
      width: 1200px
      height: 100%
      margin: auto
      /* background: rgba(10,10,10, 0.5); */
      z-index: 500
      text-align: center

      .block
        margin: auto
        color: #000000
        font-size: 50px

</style>
