<template>
  <div>
    <div class="tryming">
      <h1>authorization</h1>
    </div>
<!-- Начало: Снести это и запилить нормальную форму -->

      <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>

<!-- Конец: Снести это и запилить нормальную форму -->

    
  </div>
</template>

<script>

import { BForm, BFormInput, BFormGroup } from 'bootstrap-vue'

export default{
  name: "authorization-page",
  components: { BForm, BFormInput, BFormGroup },
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
.tryming{
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
</style>
