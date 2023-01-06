<template>
  <div>
    <!-- Начало вёрстки, выше изменять ничего нельзя -->
    <div class="area_working">
        <div class="workzone">
          <h2>Вход для преподавателей</h2>
          <!-- Это страница для преподавателей -->

          <b-form>

          <b-form-group
            label="Ваш логин:"
            label-align="left">
            <b-form-input
              id="input-horizontal"
              placeholder="Введите логин"
              v-model="form.logIn"
              :state="validation"
              required
              ></b-form-input>

                <b-form-invalid-feedback align="left" :state="validation">
                  Поле не может быть пустым
                </b-form-invalid-feedback>
                <b-form-valid-feedback align="left" :state="validation">
                  Все условия выполнены
                </b-form-valid-feedback>

          </b-form-group>

          <b-form-group
            label="Ваш пароль:"
            label-align="left">
            <b-form-input
              id="input-horizontal"
              placeholder="Введите пароль"
              v-model="form.password"
              :state="pasValid"
              required
              ></b-form-input>

                <b-form-invalid-feedback align="left" :state="pasValid">
                  Поле не может быть пустым
                </b-form-invalid-feedback>
                <b-form-valid-feedback align="left" :state="pasValid">
                  Все условия выполнены
                </b-form-valid-feedback>

          </b-form-group>
          <b-button block @click="submit">Войти</b-button>
            <p class="forgot_password text-right">
              <router-link to="#">Вход для студентов</router-link>
            </p>
          <div class="social-icons">
            <router-link to="#"><b-icon icon="google" style="color: #7952b3;"></b-icon></router-link>
            <router-link to="#"><b-icon icon="facebook" style="color: #7952b3;"></b-icon></router-link>
            <router-link to="#"><b-icon icon="twitter" style="color: #7952b3;"></b-icon></router-link>
          </div>

          </b-form>

        </div>
    </div>
    <!-- Конец вёрстки, ниже изменять ничего нельзя -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { BForm, BFormInput, BFormGroup, BButton, BIcon, BFormInvalidFeedback, BFormValidFeedback } from 'bootstrap-vue'

export default{
  name: "authorization-page",
  components: { BForm, BFormInput, BFormGroup, BButton, BIcon, BFormInvalidFeedback, BFormValidFeedback },
  data(){
    return{
      form: {
        logIn: null,
        password: null
      }
    }
  },
  methods:{
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
                User.append('login', this.form.logIn);
                User.append('password', this.form.password);
      try {
        let test = await this.LogIn(User);
                if (test.data.success) {
                    this.$router.push('/personal-cabinet');
                } else {
                    console.log("No");
                }
      } catch(error) {
          console.log(error);
      }
    },
  },
  computed: {
    validation() {
      return this.form.logIn !== null && this.form.logIn.length > 1
    },
    pasValid() {
      return this.form.password !== null && this.form.password.length > 1
    }
  }
}
</script>

<style scoped>
.area_working{
  width: 100%;
  padding: 30px;
  background: #2554FF !important;
  border: solid black;
}

.workzone{
  width: 450px;
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  /* transition: all .3s; */
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  /* margin-top: 5%; */
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  /* border: 1px solid black; */
}

/* Раздел с иконками */
/* .social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}
.social-icons svg {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
}
.social-icons ul a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
} */

/* Выправка адаптивности */
@media (min-width: 100px) and (max-width: 450px) {
  .area_working{
    padding: 0;
    /* margin: 0; */
    margin-top: 10%;
  }
  .workzone{
    width: 100%;
    /* margin-top: 2%; */
    border-radius: 0;
    /* border: 1px solid black; */
}
  .social-icons{
    display: none;
  }
}
</style>
