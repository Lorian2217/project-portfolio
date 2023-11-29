<template>
  <div>
    <!-- Start page -->
    <div id="flashcard-app" class="mx-auto mt-5 container row">
      <div no-body class="overflow-hidden col-12 col-md-6 col-xl-4 my-2" v-on:click="toggleCard(card)" v-for="(card, index) in cards" :key="index">
        <transition name="flip">
        <b-row class="card-wrapper" v-bind:style="{ background: card.color }" no-gutters v-bind:key="card.flipped">

          <b-col md="12" class="about-front" v-if="card.flipped === true">
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
      </div>
    </div>
    <!-- End page -->
  </div>
</template>

<script>
import { BRow, BCol, BCardBody, BCardText } from 'bootstrap-vue'

export default{
  name: 'About-us',
  data(){
    return{
      cards: [
        {
          front: 'С ЧЕГО ВСЕ НАЧАЛОСЬ',
          back: 'MRC-club был задуман в ноябре-декабре 2020 года. Начальная концепция подразумевала функцию «единого окна», где журналисты могли найти нужного спикера, а PR-специалисты – отследить запросы СМИ. После запуска чат-ботов и новых направлений MRC-club уже весной 2021 года становится полноценной экосистемой',
          flipped: false,
          color: '#f68c1e',
        },
        {
          front: 'ЗАПУСК РЕСУРСА',
          back: 'Перед запуском мы обзвонили множество журналистов и экспертов рынка недвижимости и задали им вопрос: хотят ли они получить ресурс, который будет аккумулировать на одной площадке всех игроков рынка (представителей СМИ, спикеров, пиарщиков)? Ответ был однозначный: несомненно. И мы запустились',
          flipped: false,
          color: '#ff6630',
        },
        {
          front: 'СТРАТЕГИЧЕСКИЕ ПАРТНЕРЫ',
          back: 'С самого начала MRC-club поддержали ведущие участники рынка недвижимости: Commonwealth Partnership, KASKAD Недвижимость, УК «ПИК Комфорт», «Гильдия управляющих и девелоперов»',
          flipped: false,
          color: '#81a22f',
        },
        {
          front: 'ПЕРВЫЙ ЧАТ-БОТ',
          back: 'Мы разработали и запустили первого чат-бота на рынке недвижимости. Он присылает спикерам запросы журналистов непосредственно в личные мессенджеры , а представителям СМИ предлагает готовую нужную фактуру',
          flipped: false,
          color: '#b4d121',
        },
        {
          front: 'ИНФОРМАЦИОННОЕ ПАРТНЕРСТВО',
          back: 'MRC-club поддерживает ключевые мероприятия рынка недвижимости, выступая информационным партнером серий форумов FORCITIES, «Форума частных инвестиций», PROESTATE & TOBY Awards, Всероссийский жилищный конгресс и др',
          flipped: false,
          color: '#ffb727',
        },
        {
          front: 'МЕРОПРИЯТИЯ ДЛЯ СМИ И PR',
          back: 'Уже в апреле 2021 года мы провели первый Zoom Talk с крупнейшим федеральным ТВ каналом – «Россия 24» - и продолжаем организовывать онлайн и офлайн встречи для СМИ и других участников рынка недвижимости: Zoom Talk с «РБК Недвижимость», Zoom Talk со Строительный газетой, MRC-летучка с газетой Известия, «Плов-пати» для СМИ и др',
          flipped: false,
          color: '#ff6630',
        },
      ]
    }
  },
  methods:{
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
  },
  components: { BRow, BCol, BCardBody, BCardText }
}
</script>

<style scoped>
.flip-enter-active { transition: all 0.4s ease; }
.flip-leave-active { display: none; }
.flip-enter, .fade-leave { transform: rotateY(180deg); opacity: 0; }
</style>
