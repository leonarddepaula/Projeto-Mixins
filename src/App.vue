<template>
  <div style="display: flex; flex-direction:row; ">
    <div style="flex-basis: 33%">
      <lista-filmes></lista-filmes>
    </div>
    <div style="flex-basis: 33%">
      <lista-pessoas></lista-pessoas>
    </div>
    <div style="flex-basis: 33%">
      <lista-videogames></lista-videogames>
    </div>
    
    
  </div>
</template>

<script>
import ListaPessoas from '@/components/ListaPessoas.vue'
import ListaVideogames from '@/components/ListaVideogames.vue'
import ListaFilmes from '@/components/ListaFilmes.vue'

export default {
  name: 'App',
  components: {
    ListaFilmes,
    ListaPessoas,
    ListaVideogames
  }
}
</script>



