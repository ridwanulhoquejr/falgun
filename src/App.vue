<template>


  
  <router-view/>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap');
#app {
  font-family: Fira Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html{
  font-size: 14px;
}
.container{
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error{
  color: red;
  font-size: 14px;
}

</style>