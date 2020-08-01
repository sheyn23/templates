<template>
  <div class="home">
    <div class="home__element" v-for="el in elements">
      <router-link :to="el.src">{{ el.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      elements: {
        first: {
          title: 'TrHeader',
          src: '/trHeader'
        },
        second: {
          title: 'Project red',
          src: '/prRed'
        },
        thread: {
          title: 'Social cube',
          src: '/soCube'
        }
      }
    };
  },
};
</script>
