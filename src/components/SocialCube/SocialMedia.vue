<template>
  <div class="social">
    <h3 class="social__header">Social Media</h3>
    <div class="social__items">
      <a href="http://vk.com"><img src="@/assets/VK.svg" alt=""></a>
      <a href="http://vk.com"><img src="@/assets/VK.svg" alt=""></a>
      <a href="http://vk.com"><img src="@/assets/VK.svg" alt=""></a>
      <a href="http://vk.com"><img src="@/assets/VK.svg" alt=""></a>
      <a href="http://vk.com"><img src="@/assets/VK.svg" alt=""></a>
      <a href="http://vk.com"><img src="@/assets/VK.svg" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMedia"
}
</script>

<style lang="sass">
  .social
    font-size: 20px
    text-align: center
    margin: auto
    width: 80%

    .social__items
      display: grid
      grid-template-columns: 1fr 1fr 1fr

      img
        cursor: pointer

</style>
