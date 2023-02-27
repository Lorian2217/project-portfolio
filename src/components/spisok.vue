<template>
  <div>
    <!-- Начало вёрстки, выше изменять ничего нельзя -->
    <div class="workzone">
      <!-- <h1>Page for the student!</h1> -->
      <b-form-group>
        <b-form-input id="input-horizontal" placeholder="Cтудент" v-model="student"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input id="input-horizontal" placeholder="Группа" v-model="group"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input id="input-horizontal" placeholder="Кафедра" v-model="cafedra"></b-form-input>
      </b-form-group>
        <div class="workzone_button">
          <b-col lg="0"> <b-button variant="outline-primary" @click="search">Найти</b-button> </b-col>
          <b-col lg="1"> <b-button variant="outline-info" @click="reset">Сбросить</b-button> </b-col>
        </div>
          Value: {{ student }} {{ group }} {{ cafedra }} {{ selected }}
    </div>
      <div class="workingpart">
        <div class="studentList">

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>

          <b-table
          id="my-table"
          :items="items"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          >
            <template #cell(Портфолио)="row">
              <b-button size="sm" class="mr-1" @click="haunt(row.item)">
                {{ row.detailsShowing ? 'Hide' : 'Портфолио' }}
              </b-button>
            </template>

          </b-table>

        </div>
      </div>
<!-- <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta necessitatibus similique magni perspiciatis minus voluptatum placeat doloribus assumenda quae culpa excepturi aspernatur ab molestiae a, dolorum adipisci fugiat aperiam laborum.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, cumque autem magnam repellat rem ratione soluta nihil laborum dolore quisquam neque velit fugit iste aspernatur blanditiis accusantium voluptate facilis dolor.
</p> -->
    <!-- Конец вёрстки, ниже изменять ничего нельзя -->
  </div>
</template>

<script>

import { BButton, BTable, VBToggle, BFormInput, BFormGroup, BCol, BPagination } from 'bootstrap-vue'

export default{
  name: "ListStudent",
  components: { BButton, BTable, BFormInput, BFormGroup, BCol, BPagination  },
  directives: { 'b-toggle': VBToggle },
  data(){
    return{
      student: null,
      group: null,
      cafedra: null,
      errors: null,
      perPage: 7,
      currentPage: 1,
      fields: [ 'ФИО', 'Группа', 'Направление_подготовки', 'Портфолио' ],
      items: [
        { ФИО: "Новичков Максим", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Святов Димитрий", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Тетерина Екатерина", Группа: "ИЗОиГД-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Андронов Антон", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Жиляева Анастасия", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Шкрабо Егор", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Демаков Владимир", Группа: "ИТ-201", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Ливандовский Богдан", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Новикова Анна", Группа: "ИТ-201", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Ярышева Мария", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Михайлюк Анастасия", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Вишнякова Виктория", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Мохнаткин Данила", Группа: "МИ-101", Направление_подготовки: "Направление подготовки студента" },
        { ФИО: "Агафонова Виктория", Группа: "НИ-101", Направление_подготовки: "Направление подготовки студента" },
      ],
      selected: ' '
    }
  },
  methods:{
    async search () {
      try{
        const result = this.student + ' ' + this.group + ' ' + this.cafedra;
        alert(result);
      } catch(error) {
        var a = this.errors = error.response.data;
        alert(a);
      }

    },
    async reset () {
      try{
        this.student = null,
        this.group = null,
        this.cafedra = null,
        this.selected = null
      } catch(error) {
        var a = this.errors = error.response.data;
        alert(a);
      }

    },
    async haunt (item) {
      try{
        this.selected = JSON.stringify(item.ФИО, null, 2);
      } catch(error) {
        this.errors = error.response.data;
        alert(this.errors);
      }

    },
  },
  computed: {
    rows() {
        return this.items.length
      }
  }
}
</script>




<style scoped>
.workzone{
  width: 90%;
  height: auto;
  padding: 30px;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}
.workzone_button{
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.workingpart{
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
}
a{
  text-decoration: none;
  color: black;
}
.studentList{
  margin: 0;
  padding: 0;
  width: 90%;
  text-align: left !important;
  border: 1px solid black;
}
@media screen and (max-width: 500px) {
  .workzone{
    width: 100%;
  }
}
</style>
