<template>
  <div class="red">
    <div class="btn">
      <span>+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
  .red {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .btn {
    text-align: center;
    margin: auto;
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
