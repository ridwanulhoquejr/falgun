<template>
    <header :class="{isHome: isHome}">
      <div class="container header-container">

        <div class="logo">
          <router-link :to="{name: 'Home'}"> <img src="../assets/img/logo.svg" alt=""> </router-link> 
        </div>

        <nav class="nav-links">
          <router-link :to="{name: 'Courses'}"> Courses </router-link>
          <router-link :to="{name: 'Login'}"> Login </router-link>
          <router-link :to="{name: 'Register'}"> Register </router-link>
          <router-link v-if="user" :to="{name: 'Profile'}"> Profile </router-link>
        </nav>
      </div>
    </header>
</template>

<script>
import getUser from '../composables/getUser'


export default {
  props: ['isHome'],

  setup(){
    const { user } = getUser()

    return { user }
  }

  

}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Fira Sans;
}
header{
  background-image: linear-gradient(to right, #2f2c64, #483b9e, #221d6b,#483b9e);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  /* max-width: 1400px; */
  margin: 0 auto;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
.header-container{
  justify-content: space-between;
  flex-direction: row;

}
.nav-links{
  display: flex;
  padding-right: 100px;
}
.nav-links a{
  text-decoration: none;
  padding: 20px;
  font-size: 14px;
  letter-spacing: 1.2px;
  color: white;
  transition: ease .3s;
}
.nav-links a:hover{
    color: #43A8EB;
}
header .nav-links a.router-link-active{
    color: #43A8EB;
    font-size: 16px;
    font-weight: bold;
}
header .logo{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
}
header.isHome{
  background-image: none;
}


</style>