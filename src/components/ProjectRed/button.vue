<template>
  <div class="btn">
    <slot />
  </div>
</template>

<script>
export default {
  name: "button"
}
</script>

<style lang="sass">
  $color: darkred
  $back: white

  .btn
    width: 20px
    height: 20px
    text-align: center
    background: $back
    border: 5px solid $color

    color: $color
    font-size: 15px
    font-weight: 900
    cursor: pointer

    transition: .3s
    transform: rotateZ(45deg)
    animation-duration: inherit

    &:hover
      transform: rotateZ(135deg)

</style>
