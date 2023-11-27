<template>
  <div>
  <HeaderContent />
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>



<script>
// Импорт "Шапки"
import HeaderContent from './components/HeaderContent.vue'

// Импорт стилей из Бутстрап-Вью
import 'bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '/src/assets/style.css'


export default {
  name: "App",
  components: {
    HeaderContent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

</style>

