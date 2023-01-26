import axios from 'axios';

const state = {
    user: null,
    token: null,
    image: null,
    // Проверка на учителя
    access: null,
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
    StateToken: state => state.token,
    StateImg: state => state.image,
    // Раздел для проверки на учителя
    isTeacher: state => !!state.access
};
const actions = {

      async Register({ commit }, UserForm) {
        let example = await axios.post('http://localhost:8000/test', UserForm);
          if (example.data.success) {
            console.log("Всё успешно");
            await commit('setUser', example.data.user)
            await commit('setToken', example.data.user.Login)
            await commit('setAccess', example.data.user.access)
            await commit('setUpload', example.data.user.image)
          } else {
            console.log("Произошла некая ошибка");
          }
          return example;
      },

      async LogIn({ commit }, User) {
        let response = await axios.post('http://localhost:8000/auth', User);
          if (response.data.success) {
            await commit('setUser', response.data.user)
            await commit('setToken', response.data.user.Login)
            await commit('setAccess', response.data.user.access)
            await commit('setUpload', response.data.user.image)
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
        let access = null
        commit('LogOut', user, access)
      },
};
const mutations = {

    setUser(state, user){
        state.user = user
    },
    setToken(state, login){
        state.token = login
    },
    setUpload(state, image){
        state.image = image
    },
    LogOut(state){
        state.user = null,
        state.image = null,
        state.access = null,
        state.token = null
    },
    // Проверка на учителя
    setAccess(state, access){
        state.access = access
    },

};
export default {
  state,
  getters,
  actions,
  mutations
};
