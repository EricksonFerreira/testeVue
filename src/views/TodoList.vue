<template>
  <div class="container">
    <Bredcrumb :items="['TodoList']"></Bredcrumb>
    <PageHeaderTodo 
        pageTitle="TodoList">
    </PageHeaderTodo>
 <div class="col-md-3 text-left">
        <label for="input">Nome</label>
        <input id="nome"
                v-model="nome"
                type="text"
                name="nome"
                class="form-control"
                @click="clickInput">
            <small v-if="error" class="form-text text-muted">{{error}}</small>

        <input type="submit" value="Adicionar"  @click="cadastrarItem" class="btn bg-green-500 rounded px-4 py-2 font-sans text-white hover:bg-blue-600">
	</div>

    <div class="bd-example">
        <table class="table table-striped">
            <thead>
                <tr class="bg-primary text-light">  <!-- bg significa background -->
                    <th>Itens</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr class="bg-blue-200" v-for="item in items" :key="item"> -->
                <tr v-for="item in items" :key="item">
                    <td>
                        <strong :id="'item-'+item.id">{{ item.nome }}</strong><br>
                    </td>
                    <td>
                        <button 
                            type="submit"
                            @click="riscar"
                            :id="'botao-'+item.id"
                            v-on:click="riscar(item.id)"
                            class="btn bg-green-500 rounded px-4 py-2 font-sans text-white">
                            Riscar
                        </button>
                        <!-- <routerLink :to="{ name: 'categoria.edit',params:{ id:item.id }}" class="btn btn-outline-info btn-sm mr-2">Editar</routerLink>
                        <button class="btn btn-outline-danger btn-sm">Excluir</button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

  </div>
</template>

<script>
    import Bredcrumb from '../components/Bredcrumb'
    import PageHeaderTodo from '../components/PageHeaderTodo'
    import {mapState} from 'vuex'

    export default {
        name:'TodoList',
        components: {
            Bredcrumb,
            PageHeaderTodo
        },
        data(){
            return{
                nome:null,
                adicionou:null,
                error:null,
                id:0,
            }
        },
        computed:{
            ...mapState({
                items: state => state.items
            })
        },
        methods:{
            cadastrarItem: function(){
                let checkou = this.checkForm();
                // console.log(checkou);
                if(checkou == true){
                    // let n = {nome:this.nome};
                    this.items.push({id:this.id,nome:this.nome});
                    // console.log(this.items);
                    localStorage.setItem("items", JSON.stringify(this.items));
                    // localStorage.categoria = JSON.parse(this.nome);
                    this.nome = "";
                    this.id++;
                    this.adicionou = true;
                    this.error = null;
                }

            },
            clickInput: function(){
                this.adicionou = null;
            },
            riscar: function(id){
                let item_id = document.getElementById('item-'+id);
                let botao_id = document.getElementById('botao-'+id);
                if(item_id != null){
                    if(item_id.style.textDecoration == "line-through"){
                        item_id.style.textDecoration = "initial";
                        // botao_id.setAttribute("value","Riscar");
                        botao_id.innerHTML="Riscar";
                        botao_id.classList.remove('bg-red-500'); 
                        botao_id.classList.add('bg-green-500');


                    }else{
                        item_id.style.textDecoration = "line-through";
                        botao_id.innerHTML="Tirar risco";
                        botao_id.classList.add('bg-red-500'); 
                        botao_id.classList.remove('bg-green-500');
                    }
                                            // console.log(botao_id.innerHTML );

                }
                // this.adicionou = null;
                // console.log(t);
            },
            checkForm: function () {
                if (this.nome) {
                    return true;
                }

                if (!this.nome || this.nome == "") {
                    this.error = 'O nome é obrigatório.';
                }
            // e.preventDefault();
            }
        },
    }
</script>
<style scoped lang="scss">
.bd-example{
    position: relative;
    padding: 1rem;
    margin: -7rem 250px 0;
    border: solid #f8f9fa;
    border-width: .2rem 0 0;
}
.table{
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    thead {
        th {
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6;
        }
    }

    td {
        padding: .75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }
    th {
        padding: .75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

}
.table-striped {
    tbody {
        tr:nth-of-type(odd) {
            background-color: #ffffff;
        }
        tr:nth-of-type(odd) {
            background-color: rgba(0,0,0,.05);
        }
    }
}
</style>
