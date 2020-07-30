<template>
  <div class="input">
    <input type="text" placeholder="asdasdasd">
  </div>
</template>

<script>
export default {
  name: "input"
}
</script>

<style scoped>
  .input {
    background: white;
    border: 1px solid darkred;
    height: 30px;
    position: relative;
  }
  .input::before, .input::after {
    content: '';
    position: absolute;
    left: -35px;
    bottom: -1px;
    border: 16px solid transparent;
    border-right: 18px solid darkred;
  }
  .input::after {
    border-right: 17px solid white;
    bottom: -1px;
    left: -33px;
  }

  .input input {
    border: none;
    height: 100%;
  }
</style>
