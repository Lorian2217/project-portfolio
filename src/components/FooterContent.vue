<template>
  <div>
    <!-- Начало вёрстки, выше ничего менять нельзя -->
    <div class="workzone p-4">
      <!-- <h1>Hello, world!</h1>
      <h2>My name is Lorian</h2>
      <h3>I'm elder prince</h3> -->
      <router-link to="#"><b-icon icon="google" style="color: #7952b3;"></b-icon></router-link>
      <router-link to="#"><b-icon icon="facebook" style="color: #7952b3;"></b-icon></router-link>
      <router-link to="#"><b-icon icon="twitter" style="color: #7952b3;"></b-icon></router-link>
      <router-link to="#"><b-icon icon="google" style="color: #7952b3;"></b-icon></router-link>
      <router-link to="#"><b-icon icon="facebook" style="color: #7952b3;"></b-icon></router-link>
      <router-link to="#"><b-icon icon="twitter" style="color: #7952b3;"></b-icon></router-link>
    </div>
    <div class="underground p-2">
      <h2>Hello, world! I'd like too see you in my web-app</h2>
    </div>
    <!-- Конец вёрстки, ниже ничего менять нельзя -->
  </div>
</template>

<script>
import {BIcon} from 'bootstrap-vue'

export default{
  name: 'downPlace',
  data(){
    return{}
  },
  components: { BIcon },
  methods:{
  }
}
</script>

<style scoped>
.workzone{
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* background-color: #00838f; */
  background-color: #808080;
}
.workzone svg {
  display: inline-block;
  width: 65px;
  vertical-align: middle;
  font-size: 15px;
  height: 40px;
  color: rgb(255,255,255) !important;
  line-height: 50px;
  margin-right: 5px;
}
.underground{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #000 !important;
  color: #C0C0C0;
  /* border: 1px solid black; */
}
</style>
