<template>
  <div class="red">
    <div class="form">
      <redBtn>+</redBtn>
      <redInput />
    </div>
  </div>
</template>

<script>
import RedBtn from '@/components/ProjectRed/button'
import RedInput from '@/components/ProjectRed/input'

export default {
  name: "index",
  components: {
    RedBtn,
    RedInput
  }
}
</script>

<style scoped>
  .red {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .form {
    width: 300px;
    padding: 30px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
</style>
