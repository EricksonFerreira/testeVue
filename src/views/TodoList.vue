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
                <tr class="bg-primary text-light">
                    <th>Itens</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    <td>
                        <strong :id="'item-'+item.id" :class="{'line-through':item.riscado}">{{ item.nome }}</strong><br>
                    </td>
                    <td>
                        <button 
                            type="submit"
                            :id="'botao-'+item.id"
                            v-on:click="riscar(item.id)"
                            :class="item.riscado?'bg-red-500':'bg-green-500'"
                            class="btn rounded px-4 py-2 font-sans text-white">
                            {{item.nomeBotao}}
                        </button>
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
                content:{},
            }
        },
        computed:{
            ...mapState(['items'])
        },
        methods:{
            cadastrarItem: function(){
                if(this.checkForm() == true){
                    this.content = {id:this.id,nome:this.nome,riscado:false,nomeBotao:'Riscar'},
                    this.$store.dispatch('addItem',{
                        item: this.content,
                        items: this.items,
                    })
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
                this.$store.dispatch('riscar',{
                    id: id,
                    items: this.items,
                })
            },
            checkForm: function () {
                if (this.nome) {
                    return true;
                }

                if (!this.nome || this.nome == "") {
                    this.error = 'O nome é obrigatório.';
                }
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
