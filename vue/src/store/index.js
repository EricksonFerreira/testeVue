import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    items: []
  },
  mutations: {
    setItem(state,items){
      state.items.push(items)
    },
    addItem(state,newItem){
      state.items.push(newItem)
    },
    riscar(state,idItem){
      state.items[idItem].riscado = true
      state.items[idItem].nomeBotao = 'Tirar risco'
    },
    tirarRisco(state,idItem){
      state.items[idItem].riscado = false
      state.items[idItem].nomeBotao = 'Riscar'
    },
  },
  actions: {
    async getItem({commit}){
      let items;
      axios
      .get('http://localhost:8000/api/todolist')
      .then(response => items = response.data);
      commit('setItem',items);
      localStorage.setItem("items", JSON.stringify(items));


    },
    async addItem({commit},data){
      commit('addItem',data.item);
      localStorage.setItem("items", JSON.stringify(data.items));
    },
    async riscar({commit},data){
      let id = data.id;
      let item = data.items[id];
      if(item.riscado == true){
        commit('tirarRisco',id);
      }else{
        commit('riscar',id);
      }
      localStorage.setItem("items", JSON.stringify(data.items));
    }
  },
  modules: {
  }
})
