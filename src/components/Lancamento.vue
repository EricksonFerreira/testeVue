<template>
<div class="container">
  <nav class="mb-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
          <routerLink to="/">Home</routerLink>
      </li>
      <!-- <li  class="breadcrumb-item">
        <routerLink to="/categoria">
            Categoria
        </routerLink>
      </li> -->
      <li  class="breadcrumb-item">
        <span  class="breadcrumb-item active">
          Index
        </span>
      </li>
    </ol>
  </nav>

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

    export default {
        name:'Lancamento',
        data(){
            return {
                pageTitle:'Lançamentos',
                buttonText:'+ Novo Lançamento',
                items: [
                    {message:'Rei Leão'},
                    {message:'Tarzan'},
                    {message:'Nemo'},
                ]
            }
        }
    }
</script>
