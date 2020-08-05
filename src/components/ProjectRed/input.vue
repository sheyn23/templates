<template>
  <div class="input">
    <div class="input__left"></div>
    <span v-if="text">{{ text }}</span>
    <input v-else type="text" placeholder="text">
    <div class="input__right"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  name: "input",
}
</script>

<style lang="sass">

  $inputHeight: 28px // Четные
  $borderWidth: 6px // Нечетные
  $borderColor: darkred
  $innerColor: white
  $borderSize: $inputHeight/2 + $borderWidth

  .input
    background: $innerColor
    border: $borderWidth solid $borderColor
    height: $inputHeight
    width: 150px
    position: relative

    .input__left
      &::after
        content: ''
        position: absolute
        bottom: 0
        left: (-$inputHeight - $borderWidth/2)
        border: $inputHeight/2 solid transparent
        border-right: $inputHeight/2 + $borderWidth/2 solid $innerColor

      &::before
        content: ''
        position: absolute
        bottom: -$borderWidth
        left: (-$inputHeight - $borderWidth*3)
        border: $borderSize solid transparent
        border-right: $borderSize solid $borderColor

    .input__right
      &::after
        content: ''
        position: absolute
        bottom: 0
        right: (-$inputHeight - $borderWidth/2)
        border: $inputHeight/2 solid transparent
        border-left: $inputHeight/2 + $borderWidth/2 solid $innerColor

      &::before
        content: ''
        position: absolute
        bottom: -$borderWidth
        right: (-$inputHeight - $borderWidth*3)
        border: $borderSize solid transparent
        border-left: $borderSize solid $borderColor

    input
      border: none
      height: 100%
      width: 100%
</style>
