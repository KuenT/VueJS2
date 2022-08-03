<template>
  <div>
  <Arbre></Arbre>
  </div>
</template>

<script>
import Arbre from './Arbre.vue'
export default {
    components: {
        Arbre 
    },
    data() {
        return {
            feuilles: [
                {name: 'feuilleA', size: '19cm', color: 'rouge'},
                {name: 'feuilleB', size: '20cm', color: 'vert'},
                {name: 'feuilleC', size: '21cm', color: 'jaune'},
                {name: 'feuilleD', size: '22cm', color: 'bleu'}
            ]
        } 
    },
}
</script>

<style>

</style>
