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
  $inputHeight: 22px
  $borderWidth: 1px
  $after: ($borderWidth * 2 + $inputHeight) / 2
  $borderColor: darkred
  $innerColor: white

  .input
    background: $innerColor
    border: $borderWidth solid $borderColor
    height: $inputHeight
    width: 150px
    position: relative

    .input__left
      &::before, &::after
        content: ''
        position: absolute
        left: (-$inputHeight - 5px)
        bottom: -1px
        border: $after solid transparent
        border-right: $after+2 solid $borderColor

      &::after
        border-right: $after+1 solid $innerColor
        bottom: -1px
        left: (-$inputHeight - 3px)


    .input__right
      &::before, &::after
        content: ''
        position: absolute
        right: (-$inputHeight - 5px)
        bottom: -1px
        border: $after solid transparent
        border-left: $after+2 solid $borderColor


    .input__right
      &::after
        border-left: $after+1 solid $innerColor
        bottom: -1px
        right: (-$inputHeight - 3px)


    input
      border: none
      height: 100%
      width: 100%
</style>
