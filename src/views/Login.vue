<template>

<NavBar />

<div class="main">

   <div class="container login-container">
    
    <h2 class="login-title">
      Login to Falgun
    </h2>

    <form @submit.prevent="handleSubmit">

        <div class="field-container">
          <input type="email" required placeholder="Email" v-model="email">
        </div>

        <div class="field-container">
          <input type="password" required placeholder="Password" v-model="password">
        </div>

          <div class="error"> {{error}}</div>
          <button class="reg btn">
             Sign In 
          </button>
        
        
          <div class="forget">
            <router-link :to="{}"> Forget Password?</router-link>
          </div>

    </form>
    <!-- <div class="or">
      <hr>
    <p>or</p>
    <hr>
    </div> -->
    
    <!-- <div class="sign_in_with">
      <a href="#" class="Google">
        Sign in with Google
      </a>
        <a href="#" class="Facebook">
          Sign in with Facebook
        </a>
    </div> -->
      <div class="alternate">
        <p class="end">
        New to Falgun? 
        <router-link class="alternate-style" :to="{name: 'Register'}"> Create new account </router-link>

        </p>

      </div>
    
    
   </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
import {useRouter} from 'vue-router'
import NavBar from '../components/NavBar.vue'


export default {

  components: {NavBar},
  
    setup(props, contex){


      const route = useRouter()

      const { error, login } = useLogin(email, password) // from useLogin.js

      const email = ref('')
      const password = ref('')


      const handleSubmit = async () => {
        await login(email.value, password.value)

        if(!error.value){
          console.log('User logged in')
          route.push({ name: 'Profile'})
        }
      }


    return {email, password, error, handleSubmit}

    }

}
</script>

<style >

body{
    width: 100%;
    height: 100%;
    background-color: #F6F4FC;
}

#main-body{

  display: flex;
  width: 100%;
  background-color: #F6F4FC;

}

.main {

  display: flex;
  width: 100%;
  background-color: #F6F4FC;
}
.container.login-container{
  flex-direction: column;
  min-height: calc(100vh - 40px);
  padding-top: 40px;
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
  h2{
  margin-bottom: 25px;
}
.login-title{
  font-weight: normal;
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
  align-items:flex-start;
  gap: 10px;
}

input {
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border: none;
  box-shadow: #C2C1C7 0px 5px 10px;
  padding: 0 0 0 7px;
  font-size: 12px;


}
.field-container label{
  font-size: 15px;
}
.reg
{
  border: solid #43A8EB 1px;
  background-color:#43A8EB ;
  border-radius: 15px;
  width: 460px;
  height: 35px;

}

.reg.btn{
    color: white;
    cursor: pointer;
    background-color: #43A8EB;
    display: block;
    text-align: center;
    padding: 5px;
    border-radius: 15px;
    transition: ease .2s;
  
}
.reg.btn:hover{
    background-color: #1884cc;

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
.forget{
  font-size: 12px;
}

.alternate{
  font-size: 14px;
  color: black;
}
.alternate-style{
  color: black;
}
.end
{
  padding-top: 10px;
  color: grey;
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