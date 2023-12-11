<template>
  <div>
    <!-- Start page -->
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand :to="{ name: 'home' }" class="ml-2">
          <b-img-lazy :src=" require('../assets/img/logo.svg') "></b-img-lazy>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'o-nas' }">О нас</b-nav-item>
            <b-nav-item :to="{ name: 'users' }">Список пользователей</b-nav-item>
            <b-nav-item :to="{ name: 'test' }">Link</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- End page -->
  </div>
</template>


<style scoped>
</style>


<script>
import { BNavbar, BCollapse, BNavbarNav, BNavItem, BNavbarToggle, BNavbarBrand, BDropdownItem, BNavItemDropdown, BImgLazy } from 'bootstrap-vue'

export default{
  name: "HeaderContent",
  components: { BNavbar, BCollapse, BNavbarNav, BNavItem, BNavbarToggle, BNavbarBrand, BDropdownItem, BNavItemDropdown, BImgLazy },
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

</script>

