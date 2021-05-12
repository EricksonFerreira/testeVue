<template>
  <div class="container">
    <Bredcrumb :items="['Categorias']"></Bredcrumb>
  
    <div class="row mb-4">
    <div class="col-md-9">
        <h1 class="h2 border-left pl-2">
            {{pageTitle}}
        </h1>
    </div>
    <div class="col-md-3 text-right">
        <a class="btn btn-success">
            {{ buttonText }}
        </a>
    </div>
  </div>
  
    <table class="table table-hover">
      <thead>
          <tr class="bg-primary text-light">  <!-- bg significa background -->
              <th>Categoria</th>
              <th>Ações</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in items" :key="item.message">
              <td>
                  <strong>{{ item.message }}</strong><br>
              </td>
              <td>
                  <!-- <a :to="{ name: 'lancamento', params: { userId: 123 }}" class="btn btn-outline-info btn-sm mr-2">Editar</a> -->
                  <button class="btn btn-outline-danger btn-sm">Excluir</button>
              </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import Bredcrumb from './Bredcrumb'
    export default {
        name:'Categoria',
        components: {
            Bredcrumb
        },
        data(){
            return {
                pageTitle:'Categorias',
                buttonText:'+ Nova Categoria',
                items: [
                    {message:'Desenho'},
                    {message:'Terror'},
                    {message:'Comédia'},
                ]
            }
        }
    }
</script>
