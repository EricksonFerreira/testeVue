<template>
  <div class="container">
    <Bredcrumb :items="['Categorias','Criar']"></Bredcrumb>
<!-- <form
    id="app"
> -->
  <div class="form-group">
      <div class="col-12">
    <label for="name">Nome da Categoria</label>

      </div>
      <div class="col-12">
    <input  id="nome"
            v-model="nome"
            type="text"
            name="nome"
            @click="clickInput">
      </div>
    <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"> -->
 <!-- <p v-if="errors.length">
    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p> -->
  </div>
    <div class="form-group">

    <small v-if="error" class="form-text text-muted">{{error}}</small>
  </div>
  <div class="form-group">
    <input type="submit" class="btn btn-primary" value="Enviar" @click="cadastrarCategoria">
  </div>
  <div v-if="adicionou" class="adicionou">
      Adicionou com sucesso!
  </div>
  <!-- </div> -->
<!-- </form> -->
<!-- {{categorias.length}} -->
<!-- <ul v-if="categorias"> -->
    <!-- <div class="cd"> -->
        <!-- <div v-if="categorias" class="categorias">
            <li v-for="n in categorias" :key="n.nome">
                {{n}}
            </li>
        </div> -->
        <!-- <p v-if="nome">{{nome}}</p> -->
    <!-- </div> -->
<!-- </ul> -->
<!-- 

        <div class="group realtimedb">
            <h2>Realtime Datastore</h2>
            <div class="input-group half left">
                <label>Firstname</label>
                <input
                type="text"

                />
            </div>
            <div class="input-group half">
                <label>Lastname</label>
                <input
                type="text"

                />
            </div>
        </div> -->
  </div>
</template>

<script>
    import Bredcrumb from '../components/Bredcrumb'
    import {mapState} from 'vuex'

    export default {
        name:'CategoriaForm',
        components: {
            Bredcrumb,
        },
        computed:{
            ...mapState({
                categorias: state => state.categorias
            })
        },
        data(){
            return{
                nome:null,
                adicionou:null,
                error:null,
                // categorias:[
                //     'Terror',
                //     'Comédia'
                // ]
            }
        },
        // state:{
        //     categorias:[
        //         {id:1,nome:'Terror'},
        //         {id:2,nome:'Comédia'}
        //     ]
        // },
        methods:{
            cadastrarCategoria: function(){
                let checkou = this.checkForm();
                if(checkou == true){
                    this.categorias.push(this.nome);
                    this.nome = "";
                    this.adicionou = true;
                    this.error = null;
                }

            },
            clickInput: function(){
                this.adicionou = null;
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
        }

    }
</script>
