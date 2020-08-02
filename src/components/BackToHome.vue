<template>
  <div class="back">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
name: "BackToHome"
}
</script>

<style scoped lang="sass">
  .back a
    font-size: 20px
    padding: 10px
    background: #787bae
    color: #aac1d3
    text-decoration: none
    position: absolute
    top: 10px
    left: 10px
    z-index: 1000
</style>
