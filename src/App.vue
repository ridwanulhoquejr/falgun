<template>

<NavBar />
  
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {

  components: {NavBar}
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.container{
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
