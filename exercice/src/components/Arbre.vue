<template>
<div>
  <li v-for="(arbre, index) in arbres " :key='index'>{{ name }}</li>
  <feuille></feuille>
</div>
</template>

<script>
import Feuille from './Feuille.vue'
export default {
    components: {
        feuille: Feuille,
    },
  
  data() {
    return {
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
