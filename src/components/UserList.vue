<template>
  <div>
    <!--  -->
    <div class="row">

      <div class="col-5 border">
        Наполнение первого блока
      </div>
      <div class="col-2 border d-flex flex-wrap m-auto justify-content-between">
        <button type="submit" class="btn btn-success my-1">Добавить</button>
        <button type="submit" class="btn btn-danger my-1">Удалить</button>
      </div>
      <div class="col-5 border">
        Наполнение третьего блока
      </div>

    </div>
    <!--  -->
  </div>
</template>

<script>
export default{
  name: 'UserList',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
