<template>
  <div>
    <!-- Начало вёрстки, выше изменять ничего нельзя -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand :to="{ name: 'home' }">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>

            <b-nav-item :to="{ name: 'second' }">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
              <span v-if="isTeacher">
                <b-nav-item :to="{ name: 'spisok' }">Студенты</b-nav-item>
              </span>

          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Личный кабинет</em>
              </template>
              <span v-if="isLoggedIn">
                  <b-dropdown-item :to="{ name: 'personal-cabinet' }">Профиль</b-dropdown-item>
                  <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
              </span>
              <span v-else>
                  <b-dropdown-item :to="{ name: 'authorization' }">Авторизация</b-dropdown-item>
                  <b-dropdown-item :to="{ name: 'home' }">Регистрация</b-dropdown-item>
              </span>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- Конец вёрстки, ниже изменять ничего нельзя -->
  </div>
</template>



<style scoped>
</style>


<script>

import { BNavbar, BCollapse, BNavbarNav, BNavItem, BNavbarToggle, BNavItemDropdown, BDropdownItem, BNavbarBrand } from 'bootstrap-vue'

export default{
  name: "HeaderContent",
  components: { BNavbar, BCollapse, BNavbarNav, BNavItem, BNavbarToggle, BNavItemDropdown, BDropdownItem, BNavbarBrand },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isAuthenticated},
    isTeacher : function(){ return this.$store.getters.isTeacher }
  },
  methods:{
    async logout(){
        await this.$store.dispatch('LogOut')
        this.$router.push('/')
      }
  }
}

// BFormInput, BButton, BNavForm,
</script>

