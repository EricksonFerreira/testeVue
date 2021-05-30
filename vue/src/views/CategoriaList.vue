<template>
  <div class="container">
    <Bredcrumb :items="['Categorias']"></Bredcrumb>
    <PageHeader 
        pageTitle="Categorias"
        buttonText="+ Nova Categoria"
        buttonLink="categoria.create"
        buttonClass="bg-green-500 rounded px-4 py-2 font-sans text-white hover:bg-blue-600">
    </PageHeader>
    <table class="table-auto">
      <thead>
          <tr class="bg-primary text-light">  <!-- bg significa background -->
              <th>Categoria</th>
              <th>Ações</th>
          </tr>
      </thead>
      <tbody>
          <tr class="bg-blue-200" v-for="categoria in categorias" :key="categoria">
              <td>
                  <strong>{{ categoria }}</strong><br>
              </td>
              <td>
                  <!-- <routerLink :to="{ name: 'categoria.edit',params:{ id:item.id }}" class="btn btn-outline-info btn-sm mr-2">Editar</routerLink>
                  <button class="btn btn-outline-danger btn-sm">Excluir</button> -->
              </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import Bredcrumb from '../components/Bredcrumb'
    import PageHeader from '../components/PageHeader'
    import {mapState} from 'vuex'

    export default {
        name:'CategoriaList',
        components: {
            Bredcrumb,
            PageHeader
        },
        data(){
            return {
                items: [
                    {id:1,message:'Desenho'},
                    {id:2,message:'Terror'},
                    {id:3,message:'Comédia'},
                ]
            }
        },
        computed:{
            ...mapState({
                categorias: state => state.categorias
            })
        },
    }
</script>
