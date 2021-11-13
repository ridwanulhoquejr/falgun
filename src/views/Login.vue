<template>

<div class="main">
   <div class="container login-container">
    <div class="top_line">
     
    </div>
      
    <h2>
      Sign in to your account
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
          <a href="#">Forget Password</a>
        </div>

    </form>
    <div class="or">
      <hr>
    <p>or</p>
    <hr>
    </div>
    
    <div class="sign_in_with">
      <a href="#" class="Google">
        Sign in with Google
      </a>
        <a href="#" class="Facebook">
          Sign in with Facebook
        </a>
    </div>
    <p class="end">
      New to Falgun? 
      <router-link :to="{name: 'Register'}"> Create new account </router-link>

    </p>
    
   </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
import {useRouter} from 'vue-router'

export default {

  components: {},
  
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

<style scopped>

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
  min-height: 100vh;
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
  border-radius: 5px;
  border: none;
  box-shadow: #C2C1C7 0px 5px 10px;
}
.field-container label{
  font-size: 15px;
  padding: 5px;
}
.reg
{
  border: solid #43A8EB 1px;
  background-color:#43A8EB ;
  border-radius: 5px;
  width: 460px;
  height: 40px;
}

.reg.btn{
    color: white;
    cursor: pointer;
    background-color: #43A8EB;
    display: block;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    transition: ease .2s;
  
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

.or
{
  margin-top: 25px;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-left: 10PX;
}

.or1
{
  display: flex;
  align-items: center;
  width: 450px;
  margin: 10px 0;
  padding-left: 18px;
  gap: 20px;
  color: grey;
}
.sign_in_with
{
  margin-top: 25px;
  display: flex;
  gap: 100px;
}

.Google
{
  border: 1px #DD4B39 solid;
  background-color: #DD4B39;
  color: #FFFFFF;
  padding: 10px 30px;
  border-radius: 10px;
}

.Facebook
{
  border: 1px #3B5998 solid;
  background-color: #3B5998;
  color: #FFFFFF;
  padding: 10px 15px;
  border-radius: 10px;
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