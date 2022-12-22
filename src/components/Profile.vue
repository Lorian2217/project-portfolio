<template>
  <div>
    <!-- Начало вёрстки, выше ничего менять нельзя -->
    <div class="area_working">
      <div class="avatar">
        <b-avatar square size="200px"></b-avatar>
        <h2>Добро пожаловать, {{ User }}</h2>
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
            <template #cell(Портфолио)="row">
              <b-button size="sm" class="mr-1" @click="haunt(row.item)">
                {{ row.detailsShowing ? 'Hide' : 'Портфолио' }}
              </b-button>
            </template>

        </b-table>

      </div>
    </div>
    <!-- Конец вёрстки, ниже ничего менять нельзя -->
  </div>
</template>



<script>
import { BAvatar, BTable, BPagination } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default{
  name: 'personal-cabinet',
  components: { BAvatar, BTable, BPagination },
  data(){
    return{
      perPage: 7,
      currentPage: 1,
      fields: [ 'Наименование_мероприятия_в_котором_участвовал_студент', 'Документ_подтверждающий_участие' ],
      items: [
        { Наименование_мероприятия_в_котором_участвовал_студент: "Выставка восковых фигур", Документ_подтверждающий_участие: this.User },
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
  },
  computed: {
    rows() {
        return this.items.length
      },
  ...mapGetters({ User: "StateUser" })
  }
}
</script>

<style scoped>
.avatar{
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  width: 90%;
  height: auto;
  margin: 2% auto;
  padding: 20px;
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
</style>
