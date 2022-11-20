<template>
  <div>
    <!-- Начало вёрстки, выше изменять ничего нельзя -->
    <div class="workzone">
      <h1>Page for the student!</h1>
        <b-form>
          <div class="form-group d-flex">
            <input type="text" class="form-control w-100" v-model="text1" placeholder="Введите фамилию и имя студента">
            <button type="submit" class="btn btn-primary ms-3">Поиск</button>
          </div>
        </b-form>
        Value: {{ text1 }}
    </div>
      <div class="workingpart">
        <div class="subfilter">
          <b-button variant="primary" v-b-toggle="'collapse-1'" class="m-1">Курс 1</b-button>
            <b-collapse id="collapse-1">
              <b-link href="#MI-101"> МИ-101 </b-link> <br>
              <b-link href="#"> ОФ-101 </b-link> <br>
              <b-link href="#NI-101"> НИ-101 </b-link> <br>
              <b-link href="#IZOiGD-101"> ИЗОиГД-101 </b-link>
            </b-collapse>
          <b-button variant="primary" v-b-toggle="'collapse-2'" class="m-1">Курс 2</b-button>
            <b-collapse id="collapse-2">
              <b-link href="#"> МИ-101 </b-link> <br>
              <b-link href="#"> ОФ-101 </b-link> <br>
              <b-link href="#"> НИ-101 </b-link> <br>
              <b-link href="#"> ИЗОиГД-101 </b-link>
            </b-collapse>
          <b-button variant="primary" v-b-toggle="'collapse-3'" class="m-1">Курс 3</b-button>
            <b-collapse id="collapse-3">
              <b-link href="#"> МИ-101 </b-link> <br>
              <b-link href="#"> ОФ-101 </b-link> <br>
              <b-link href="#"> НИ-101 </b-link> <br>
              <b-link href="#"> ИЗОиГД-101 </b-link>
            </b-collapse>
          <b-button variant="primary" v-b-toggle="'collapse-4'" class="m-1">Курс 4</b-button>
            <b-collapse id="collapse-4">
              <b-link href="#"> МИ-101 </b-link> <br>
              <b-link href="#"> ОФ-101 </b-link> <br>
              <b-link href="#"> НИ-101 </b-link> <br>
              <b-link href="#"> ИЗОиГД-101 </b-link>
            </b-collapse>
          <b-button variant="primary" v-b-toggle="'collapse-5'" class="m-1">Курс 5</b-button>
            <b-collapse id="collapse-5">
              <b-link href="#MI-101"> МИ-101 </b-link> <br>
              <b-link href="#"> ОФ-101 </b-link> <br>
              <b-link href="#NI-101"> НИ-101 </b-link> <br>
              <b-link href="#IZOiGD-101"> ИЗОиГД-101 </b-link>
            </b-collapse>
        </div>
        <div class="studentList">
          <b-table-simple >
          <!-- Тестовый Раздел с МИ-101 -->
            <b-tr>
              <b-th id="MI-101">МИ-101</b-th>
            </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
          <!-- Тестовый Раздел с НИ-101 -->
            <b-tr>
              <b-th id="NI-101">НИ-101</b-th>
            </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
          <!-- Тестовый Раздел с ИЗОиГД-101 -->
            <b-tr>
              <b-th id="IZOiGD-101">ИЗОиГД-101</b-th>
            </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
            <b-tr> <b-td> <b-link>Студент</b-link> </b-td> </b-tr>
          </b-table-simple>
        </div>
      </div>
<p>
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
</p>
    <!-- Конец вёрстки, ниже изменять ничего нельзя -->
  </div>
</template>

<script>

import {BForm, BButton, BCollapse, BLink, BTableSimple, BTh, BTr, BTd, VBToggle } from 'bootstrap-vue'

export default{
  name: "ListStudent",
  components: { BForm, BButton, BCollapse, BLink, BTableSimple, BTh, BTr, BTd },
  directives: { 'b-toggle': VBToggle },
  data(){
    return{
      text1: '',
    }
  },
  methods:{
  }
}
</script>




<style scoped>
.workzone{
  width: 75%;
  height: auto;
  margin-top: 2%;
  margin-left: auto;
  margin-right: 5%;
  border: 1px solid black;
}
.workingpart{
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
}
.subfilter{
  display: inherit;
  flex-direction: column;
  position: sticky;
  top: 10%;
  width: 10%; /*пока так оставить, потом подогнать под размер родителя*/
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black; */
}
a{
  text-decoration: none;
  color: black;
}
.studentList{
  margin: 0;
  padding: 0;
  width: 80%;
  text-align: left !important;
  border: 1px solid black;
}
@media screen and (max-width: 500px) {
  .workzone{
    width: 100%;
  }
}
</style>
