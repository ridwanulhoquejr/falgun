<template>

  <NavBar />
  
  <div class="container lessons-container">
    <div class="lesson-wrapper">
      <section id="lessons-details">
        <div>
            <div v-if="error">{{ error }}</div>
          <div v-if="posts.length" >
            <postList :posts="posts" />
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import getPosts from '../composables/getPosts'
import postList from '../components/postList.vue'

export default {
  components: {NavBar, postList},

    setup(props){

    const { posts, error, load } = getPosts()
    load()
    return { posts, error }
    }


}
</script>

<style >

.container.lessons-container {
	flex-direction: column;
  	margin-top: 100px;
}

.lesson-wrapper {
	width: 100%;
  	max-width: 650px;
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-items: flex-start;
	justify-content: flex-start;
  /* margin-top: 50px; */
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
	/* margin-top: 50px; */
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

/* lessons details section */
#lessons-details .container {
	width: 100%;
	max-width: 1080px;
	position: relative;
}
#lessons-details a {
	display: block;
	color: #221f36;
	background-color: white;
	border: solid 1px #00000029;
	padding: 10px 20px;
	border-radius: 5px;
	transition: ease 0.2s;
  text-align: center;
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

#lessons-details a:hover {
	background-color: #6b61e1;
	color: white;
	transform: scale(1.0);
  transition: ease-in-out 0.3s;
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