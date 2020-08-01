<template>
  <div class="social-media">
    <h3>Social Media</h3>
    <div class="networks">
      <img src="@/assets/VK.svg" alt="">
      <img src="@/assets/VK.svg" alt="">
      <img src="@/assets/VK.svg" alt="">
      <img src="@/assets/VK.svg" alt="">
      <img src="@/assets/VK.svg" alt="">
      <img src="@/assets/VK.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
name: "socialMedia"
}
</script>

<style scoped>
  .social-media {
    font-size: 20px;
    text-align: center;
    margin: auto;
    width: 80%;
  }

  .networks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .networks img {
    cursor: pointer;

  }
</style>
