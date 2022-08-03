<template>
  <div id="arbres">
    <ul>
      <li v-for="(arbre, index) in arbres " :key='index'>
      <!--<li v-for="arbre in arbres">-->
        <h2>{{ arbre.name }}</h2>
      </li>
    </ul>
    <app-feuille v-bind:feuilles="feuilles"></app-feuille>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      props: {
        arbres: {
          type: Array
        }
      },
      data(){
        return {

        }
      },
        /*arbres: [
            {name: 'arbreA', height: '101cm'},
            {name: 'arbreB', height: '120cm'}
        ]
        feuilles: [
          {name: 'feuilleA', size: '19cm', color: 'rouge'},
          {name: 'feuilleB', size: '20cm', color: 'vert'},
          {name: 'feuilleC', size: '21cm', color: 'jaune'},
          {name: 'feuilleD', size: '22cm', color: 'bleu'}
        ]*/
    }
  }
}
</script>

<style>

</style>
