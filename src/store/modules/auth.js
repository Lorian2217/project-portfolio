import axios from 'axios';

const state = {
    user: null,
    token: null,
    image: null,
};
const getters = {
    isAuthenticated: state => !!state.user,
    // StatePost: state => state.email,
    StateUser: state => state.user,
    StateToken: state => state.token,
    StateImg: state => state.image
};
const actions = {

      async Register({ commit }, UserForm) {
        let example = await axios.post('http://localhost:8000/post', UserForm);
          if (example.data.success) {
            console.log("Всё успешно");
            await commit('setUser', UserForm.get('username'))
            await commit('setToken', example.data.user.api_token)
            await commit('setUpload', example.data.user.image)
          } else {
            console.log("Произошла некая ошибка");
          }
          return example;
      },

      async LogIn({ commit }, User) {
        let response = await axios.post('http://localhost:8000/auth', User);
          if (response.data.success) {
            await commit('setUser', response.data.user.username)
            await commit('setToken', response.data.user.api_token)
            // await commit('setUpload', response.data.user.image)
          } else {
            console.log("Произошла некая ошибка");
          }
          return response;

      },

      async Upload({ commit }, formData) {
        let response = await axios.post('http://localhost:8000/upload', formData);
          if (response.data.success) {
            await commit('setUpload', response.data.answer)
          } else {
            console.log("Произошли технические неполадки");
          }

      },

      async LogOut({ commit }){
        let user = null
        commit('LogOut', user)
      },

      async Example(){
        // console.log(state.user)
      }
};
const mutations = {

    setUser(state, username){
        state.user = username
    },
    setToken(state, api_token){
        state.token = api_token
    },
    setUpload(state, image){
        state.image = image
    },
    LogOut(state){
        state.user = null,
        state.image = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
