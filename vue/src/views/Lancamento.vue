<template>
<div class="container">
  <Bredcrumb :items="['Lancamentos']"></Bredcrumb>
  <PageHeader pageTitle="Lançamentos" buttonText="+ Novo Lançamento" buttonLink="lancamento.create" buttonClass="btn-success"></PageHeader>
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
                <routerLink :to="{ path: '/lancamento/'+item.id+'/edit'}" class="btn btn-outline-info btn-sm mr-2">Editar</routerLink>
                <button class="btn btn-outline-danger btn-sm">Excluir</button>
            </td>
        </tr>
    </tbody>
  </table>
</div>
</template>
<script>
  import Bredcrumb from '../components/Bredcrumb'
  import PageHeader from '../components/PageHeader'
  export default {
  name:'Lancamento',
    components: {
   Bredcrumb,
   PageHeader
	},
   data(){
   return {
        pageTitle:'Lançamentos',
        buttonText:'+ Novo Lançamento',
        items: [
          {id:1,message:'Rei Leão'},
          {id:2,message:'Tarzan'},
          {id:3,message:'Nemo'},
        ]
	}
}
	}
</script>
