<template>
  <div>
    <!-- Start page -->
    <div id="flashcard-app" class="container row">
      <b-card no-body class="overflow-hidden col-4 m-5" v-on:click="toggleCard(card)" v-for="(card, index) in cards" :key="index">
        <transition name="flip">
        <b-row no-gutters v-bind:key="card.flipped">

          <b-col md="12" v-if="card.flipped === true">
            <b-card-body>
              <b-card-text>
                {{ card.back }}
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="12" class="about-front" v-else>
            <b-card-body>
              <b-card-text>
                {{ card.front }}
              </b-card-text>
            </b-card-body>
          </b-col>

        </b-row>
        </transition>
      </b-card>
    </div>
    <!-- End page -->
  </div>
</template>

<script>
import { BCard, BRow, BCol, BCardBody, BCardText } from 'bootstrap-vue'

export default{
  name: 'About-us',
  data(){
    return{
      cards: [
        {
          id: 1,
          front: 'С ЧЕГО ВСЕ НАЧАЛОСЬ ',
          back: 'MRC-club был задуман в ноябре-декабре 2020 года. Начальная концепция подразумевала функцию «единого окна», где журналисты могли найти нужного спикера, а PR-специалисты – отследить запросы СМИ. После запуска чат-ботов и новых направлений MRC-club уже весной 2021 года становится полноценной экосистемой',
          flipped: false,
        },
        {
          id: 2,
          front: 'Invented the "Clarke Calculator"',
          back: 'Edith Clarke',
          flipped: false,
        },
      ]
    }
  },
  methods:{
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
  },
  components: { BCard, BRow, BCol, BCardBody, BCardText }
}
</script>

<style scoped>
.flip-enter-active { transition: all 0.4s ease; }
.flip-leave-active { display: none; }
.flip-enter, .fade-leave { transform: rotateY(180deg); opacity: 0; }
</style>
