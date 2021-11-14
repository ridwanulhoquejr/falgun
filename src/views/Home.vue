<template>

  <section id="hero">

    <div class="hero container">

    <div class="hero-content">
      <h1>Coding is the language of future</h1>
      <p class="para"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam aliquid error repudiandae facere dignissimos.
      </p>
      <button id="btn"> START  LEARNING</button>

    </div>

  </div>

  </section>
  
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'Home',
  components: {NavBar}
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Fira Sans;
}
#hero{
  background-image: url(../assets/img/home_page_background.png);
  background-size: cover;
  background-position: top center;
  position: relative;
  object-fit: cover;
  z-index: 1;
}
#hero::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: -1;
}
#hero h1{
  
  margin-bottom: 25px;
  font-size: 2.5em;
  color: white;
}
.hero.container{
  min-height: 100vh;
}
.hero-content {
  text-align: center;
}
.para{
  color: rgba(255, 255, 255, 0.397) ;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
   
}
/* 
.hero-section{
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-section-content{
 
} */
 #btn{
    height: 55px;
    width: 250px;
    color: white;
    text-align: center;
    padding: 5px;
    border: none;
    border-radius: 5px;
    transition: ease .2s;
    background: #FF53A2 0% 0% no-repeat padding-box;
    border-radius: 33px;
    opacity: 1;
    margin-top: 45px;
    cursor: pointer;
    
}
#btn:hover{
    background-color: #1884cc;
}
</style>