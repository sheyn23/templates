<template>
  <div id="app">
    <RouterView/>
    <modal />
  </div>
</template>

<script>
import modal from './components/modal'

export default {
    components: {
        modal
    }
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0

#app
  font-family: sans-serif
  background: #4b426d
</style>
