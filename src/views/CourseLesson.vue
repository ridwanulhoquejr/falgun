<template>

  <NavBar />

    
  <div class="container lessons-container">
    <!-- lesson info section -->

    <!-- <h2 class="page-title">Lessons</h2> -->
    <div class="lesson-wrapper">

      <!-- lessons details section -->
      <section id="lessons-details">
        <div>

          <div class="lesson sec" id="lesson">
            <a href="#l1">Introduction</a>

          </div>

          <div class="lesson">
            <div class="lesson">
              <a href="#l2">Variable & Identifiers</a>
            </div>
            <div class="lesson sec2.2">
              <a href="#l3">Indentation & Comments</a>
            </div>

            <div class="lesson sec2.3">
              <a href="#l4">Data Type</a>
            </div>
          </div>

          <div class="lesson sec">
            <div class="lesson sec3.1">
              <a href="#l5">Conditions</a>

            </div>
            <div class="lesson sec3.2">
              <a href="#l6">Loops</a>

              
            </div>
            <div class="lesson sec3.3">
              <a href="#l7">Arrays</a>

              
            </div>
          </div>

         
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
          <div class="lesson sec">
            <a href="#l8">Dictionary</a>
          </div>
        </div>
      </section>

      <div class="popup" v-if="{isDeafualt: true}">
        <div class="sec">
          <div class="lesson sec3.1">
            <a href="#l5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore amet omnis saepe quidem
              similique, doloribus, facere sit recusandae perspiciatis adipisci magnam, quasi dicta sapiente
              perferendis? Accusamus non perspiciatis unde ipsam?</a>
          </div>
          <div class="lesson sec3.1">
            <a href="#l5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore amet omnis saepe quidem
              similique, doloribus, facere sit recusandae perspiciatis adipisci magnam, quasi dicta sapiente
              perferendis? Accusamus non perspiciatis unde ipsam?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  components: {NavBar}

}
</script>

<style >

.container.lessons-container {
	flex-direction: column;
  margin-top: 100px;
}

.lesson-wrapper {
	width: 100%;
  max-width: 720px;
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-items: flex-start;
	justify-content: flex-start;
  margin-top: 50px;
}
#lessons-details {
	flex: 3;
}
.popup {
	flex: 6;
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	background: #6b61e1;
}
.lesson {
	width: 100%;
}
.popup a {
	display: inline-block;
	margin-bottom: 10px;
}
.lessons-container {
	margin-top: 50px;
	flex-direction: column;
	/* min-height: calc(100vh - 100px); */
	/* margin-top: 100px; */
}
.page-title {
	margin-right: auto;
  /* margin-top: 40px; */
  font-size: 1.7em;

  padding: 25px 0 0 20px;
}

/* lesson info section */
#lesson-info {
	background-image: linear-gradient(
		to right,
		#2f2c64,
		#483b9e,
		#221d6b,
		#807aa3
	);
	color: white;
	padding-bottom: 40px;
}
#lesson-info .container img {
	width: 100px;
	position: absolute;
	top: 55px;
	right: 0;
	background-color: yellow;
	border-radius: 50%;
}
#lesson-info h1 {
	font-size: 20px;
	margin-bottom: 10px;
}
#lesson-info p {
	font-size: 14px;
	letter-spacing: 1px;
	width: 950px;
}
/* lessons details section */
#lessons-details .container {
	width: 100%;
	max-width: 1080px;
	position: relative;
}
#lessons-details a,
.popup a {
	display: block;
	color: #221f36;
	background-color: white;
	border: solid 1px #00000029;
	padding: 10px 20px;
	border-radius: 5px;
	transition: ease 0.2s;
}
#lessons-details .sec {
	margin: 10px 0;
}
/* popup */
#lessons-details .popup {
	display: none;
	width: 700px;
	background-color: #6b61e1;
	color: white;
	padding: 20px;
	border-radius: 7px;
	position: absolute;
	top: 70px;
	left: 250px;
}
#lessons-details #l1:target,
#lessons-details #l2:target,
#lessons-details #l3:target,
#lessons-details #l4:target,
#lessons-details #l5:target,
#lessons-details #l6:target,
#lessons-details #l7:target,
#lessons-details #l8:target {
	display: block;
}
#lessons-details a:hover {
	background-color: #6b61e1;
	color: white;
	transform: scale(1.1);
  transition: ease-in-out 0.2s;
}
/* global */

.container {
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}


</style>