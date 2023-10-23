<template>
  <div>
    <h3>Lista Pessoas</h3>
    <input type="text" placeholder="Nome do filme" v-model="item">
    <button type="button" @click="adicionarItem">Adicionar</button>
    <br>
    <ul>
      <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
    </ul>
    <button type="button" @click="removerItem">Remover</button>
  </div>
</template>

<script>
import ListaMixin from '@/components/mixins/ListaMixin'
import RemoverItemLista from './mixins/RemoverItemLista'
export default {
  name: 'ListaPessoas',
  mixins: [ListaMixin, RemoverItemLista]
}
</script>

