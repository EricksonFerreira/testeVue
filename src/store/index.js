import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    items: []
  },
  mutations: {
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
    async addItem({commit},data){
      axios
      .get('https://60b130551f266100170000a1.mockapi.io/teste/t')
      .then(response => console.log(response.data));


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
