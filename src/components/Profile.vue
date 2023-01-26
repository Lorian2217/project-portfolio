<template>
  <div>
    <!-- Начало вёрстки, выше ничего менять нельзя -->
    <div class="area_working">
      <div class="avatar">
        <form @change.prevent="upload()">
          <label for="upload">
            <b-avatar v-bind:src=" 'http://127.0.0.1:8000' +  answer " square size="200px"></b-avatar>
          </label>
            <input @change="handleOnchange($event)" id="upload" type="file" />
        </form>
            <div class="regalis">
              <h4>Добро пожаловать, {{ User.username }} </h4>
              <h4>Должность: {{ User.grade }} </h4>
              <h4>Квалификация: {{ User.qualification }} </h4>
            </div>
      </div>
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
              <!-- <template #cell(Портфолио)="row">
                <b-button size="sm" class="mr-1" @click="haunt(row.item)">
                  {{ row.detailsShowing ? 'Hide' : 'Портфолио' }}
                </b-button>
              </template> -->

          </b-table>

      </div>
    </div>
    <!-- Конец вёрстки, ниже ничего менять нельзя -->
  </div>
</template>



<script>
import { BAvatar, BTable, BPagination } from 'bootstrap-vue'
import { mapGetters, mapActions } from 'vuex'

export default{
  name: 'personal-cabinet',
  components: { BAvatar, BTable, BPagination },
  data(){
    return{
      image: ' ',
      response: null,
      perPage: 7,
      currentPage: 1,
      fields: [ 'Наименование_мероприятия_в_котором_участвовал_студент', 'Документ_подтверждающий_участие' ],
      items: [
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: this.token },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка церковного инвентаря", Документ_подтверждающий_участие: "Документ" },
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка братьев Сафроновых", Документ_подтверждающий_участие: "Документ" },
        ],
    }
  },
  methods:{
    handleOnchange(event){
      this.image = event.target.files[0]
    },
    ...mapActions(["Upload"]),
      async upload(){
        const formData = new FormData();
          formData.set('image', this.image);
          formData.set('login', this.token);

        try{
          let test = await this.Upload(formData);
            if (test.data.success) {
              console.log("Всё прошло успешно");
            } else {
              console.log("Произошла критическая ошибка");
            }

        } catch(error) {
            console.log(error)
        }
      }
  },
  computed: {
    rows() {
        return this.items.length
      },
  ...mapGetters({ User: "StateUser", answer: "StateImg", token: "StateToken" })
  }
}
</script>

<style scoped>
.area_working{
  width: 100%;
}
.avatar{
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  width: 90%;
  height: auto;
  margin: 2% auto;
  padding: 20px;
  border: solid black;
}
.avatar input[type="file"] {
  display: none;
}
.regalis{
  width: 100%;
  padding: 10px;
  border: solid black;
}
.studentList{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  text-align: left !important;
  border: solid black;
}
@media screen and (max-width: 400px) {
  .avatar{
    width: 100%;
    flex-direction: column;
    align-items: center;
    border: none;
  }
  .regalis{
    border: none;
    font-size: 1.5rem;
    padding: 0;
  }
  .studentList{
    width: 100%;
    border: none;
  }
}
</style>
