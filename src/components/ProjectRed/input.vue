<template>
  <div class="input">
    <div class="input-left"></div>
    <input type="text" placeholder="asdasdasd">
    <div class="input-right"></div>
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

  .input-left::before, .input-left::after {
    content: '';
    position: absolute;
    left: -35px;
    bottom: -1px;
    border: 16px solid transparent;
    border-right: 18px solid darkred;
  }
  .input-left::after {
    border-right: 17px solid white;
    bottom: -1px;
    left: -33px;
  }

  .input-right::before, .input-right::after {
    content: '';
    position: absolute;
    right: -35px;
    bottom: -1px;
    border: 16px solid transparent;
    border-left: 18px solid darkred;
  }
  .input-right::after {
    border-left: 17px solid white;
    bottom: -1px;
    right: -33px;
  }

  .input input {
    border: none;
    height: 100%;
  }
</style>
