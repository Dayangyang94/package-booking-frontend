import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
  },
  mutations: {

  },
  actions: {
  //提交
  createTodos(context,values){
    //请求网络
    const url = "http://localhost:8080/PackageToStorage";
    axios.post(url,{
      packageId:values.packageId,
        name:values.name,
        telephone:values.telephone,
        weight:values.weight
    }).then(function(response){
      context.dispatch("createTodos")
    }).catch(function (error) {
        alert(error.response)
        console.log(error.response)
    }) 
},  
  }
})
