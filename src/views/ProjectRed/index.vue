<template>
  <div class="red">
    <back />
    <div class="form">
      <red-btn>+</red-btn>
      <red-input :text="'testBTN'"/>
    </div>
  </div>
</template>

<script>
import RedBtn from '@/components/ProjectRed/button'
import RedInput from '@/components/ProjectRed/input'
import Back from "@/components/backToHome";

export default {
  name: "ProjectRed",
  components: {
    RedBtn,
    RedInput,
    Back,
  }
}
</script>

<style lang="sass">
  .red
    width: 100vw
    height: 100vh
    display: flex
    justify-content: center

    .form
      width: 300px
      padding: 30px
      border: 1px solid black
      display: flex
      justify-content: space-around
</style>
