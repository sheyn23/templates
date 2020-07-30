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

<style scoped>
  .btn {
    text-align: center;
    width: 20px;
    height: 20px;
    background: white;
    border: 5px solid darkred;

    transform: rotateZ(45deg);

    color: darkred;
    font-size: 15px;
    font-weight: 900;
    animation-duration: inherit;
    transition: .3s;
    cursor: pointer;
  }

  .btn:hover {
    transform: rotateZ(135deg);
  }
</style>
