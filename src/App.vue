<template>
  <div id="app">
    <UnderConstruction></UnderConstruction>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UnderConstruction from './components/underConstruction/UnderConstruction.vue';

@Component({
  components: {
      UnderConstruction,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
}
</style>
