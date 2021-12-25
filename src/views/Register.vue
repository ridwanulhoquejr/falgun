<template>

<!-- <NavBar /> -->
  <div class="main">

   <div class="container register-container">

    <h2 class="choice-courses">
        Create an account
    </h2>
    <form @submit.prevent="handleSubmit">

      <div class="field-container">
        <input type="text" required v-model="displayName" placeholder="Name">
      </div>

      <div class="field-container">
        <input type="email" required placeholder="Email" v-model="email">
      </div>

      <div class="field-container">
        
        <input type="password" required placeholder="Password" v-model="password">
      </div>
      <div class="error"> {{ error }}</div>

          <button class="reg btn">
             Sign Up 
          </button>
        
    </form>

    <div class="alternate">
        <p class="end">
        Already have an account? 
        <router-link class="alternate-style" :to="{name: 'Login'}"> Login Account </router-link>

        </p>

      </div>

      <!-- <div class="have-account"> 
        <p>
            Already have an account? 
            <router-link :to="{name: 'Login'}"> Sign In </router-link>
        
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
import {useRouter} from 'vue-router'
import NavBar from '../components/NavBar.vue'




export default {
  components: {NavBar},
  
    setup(){

      const route = useRouter()
      const { error, signup } = useSignup() // from useSignup.js


      const displayName = ref('')
      const email = ref('')
      const password = ref('')


      const handleSubmit = async () => {

        await signup(email.value, password.value, displayName.value)
        console.log(displayName)

        if(!error.value){
          route.push({ name: 'Courses'})
        }

      }



    return {email, password, displayName, error, handleSubmit}

    }

}
</script>

<style >

body{
    width: 100%;
    height: 100%;
    background-color: #F6F4FC;
}

.main {
  display: flex;
  width: 100%;
  background-color: #F6F4FC;
  
  
}
.container.register-container{
  flex-direction: column;
  min-height: 100vh;
}
h2{
  font-weight: normal;
}
.main img {
  width: 40%;
  object-fit: cover;

}
.top_line a {
  color: black;
}

.top_line {
  margin-top: 50px;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  gap: 50px;
}
.field-container{
  margin-bottom: 15px;
  width: 100%;
}
.field-container label{
  font-size: 15px;
  padding: 5px;
}
.have-account{
  margin-top: 18px;
}

a.button {
  color: blue;
  border: solid blue 1px;
  border-radius: 5px;
  padding: 5px;
  transition: ease 0.5s;
}
a.button:hover {
  background-color: rgb(102, 136, 231);
  color: white;
}
form {

  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  align-items:center;
  gap: 10px;

}

input {
  width: 100%;
  height: 40px;
  border-radius: 15px;
  box-shadow: #C2C1C7 0px 5px 10px;
  /* color: #8796a0; */
  padding: 0 0 0 7px;
  font-size: 12px;
}
input:focus{
    outline-color: #483b9e;
}

.reg
{
  border: solid #43A8EB 1px;
  background-color:#43A8EB ;
  border-radius: 15px;
  width: 100%;
  height: 35px;
}
.reg a
{
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  padding-top: 10px;
}
.log
{
  text-align: center;
  border: solid #8796a0 1px;
  border-radius: 5px;
  color: white;
  background-color: #43A8EB;
  padding: 15px 212px ;
  
  
  
}
hr
{
  
  border: none;
  border-bottom: 1px solid black;
}




.alternate{
  padding: 10px;
}
.alternate-style{
  text-decoration: underline;
  padding: 3px;
}

.end
{
  padding-top: 10px;
  color: grey;
}
.forget{
  font-size: 12px;
}
/* icon design */

.icon
{
  position: relative;
}
ion-icon
{
  position: absolute;
  color: black;
  right: 15px;
  top: 13px;

}
#floating_point
{
  position: absolute;
  width: 150px;
  top: 20px;
  left: 220px;
}
</style>