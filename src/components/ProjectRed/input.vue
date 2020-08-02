<template>
  <div class="input">
    <div class="input__left"></div>
    <input type="text" placeholder="text">
    <div class="input__right"></div>
  </div>
</template>

<script>
export default {
  name: "input"
}
</script>

<style lang="sass">
  $borderWidth: 1px
  $borderColor: darkred
  $innerColor: white

  .input
    background: $innerColor
    border: $borderWidth solid $borderColor
    height: 30px
    width: 150px
    position: relative

    .input__left
      &::before, &::after
        content: ''
        position: absolute
        left: -35px
        bottom: -1px
        border: 16px solid transparent
        border-right: 18px solid $borderColor

      &::after
        border-right: 17px solid $innerColor
        bottom: -1px
        left: -33px


    .input__right
      &::before, &::after
        content: ''
        position: absolute
        right: -35px
        bottom: -1px
        border: 16px solid transparent
        border-left: 18px solid $borderColor


    .input__right
      &::after
        border-left: 17px solid $innerColor
        bottom: -1px
        right: -33px


    input
      border: none
      height: 100%
      width: 100%
</style>
