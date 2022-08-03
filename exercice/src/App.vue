<template>
  <div>
    <app-arbreVue v-bind:arbres="arbres"></app-arbreVue>
  </div>
</template>

<script>
import ArbreVue from './components/ArbreVue.vue'
export default {
  components: {
    'app-arbreVue' : ArbreVue
  },
  data(){
    return{
      arbres: [
        {name: 'arbreA', height: '101cm'},
        {name: 'arbreB', height: '120cm'}
      ]
    }
  }
}
</script>

<style>

</style>
