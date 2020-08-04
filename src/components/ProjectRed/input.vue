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

  $inputHeight: 28px // Четные
  $borderWidth: 6px // Нечетные
  $borderColor: darkred
  $innerColor: white
  $bordercount: $inputHeight/2 + $borderWidth

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
        border: $bordercount solid transparent
        border-right: $bordercount solid $borderColor

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
        border: $bordercount solid transparent
        border-left: $bordercount solid $borderColor

    input
      border: none
      height: 100%
      width: 100%
</style>
