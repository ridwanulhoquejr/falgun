<template>
  <section id="details">
    <div class="container top-container">
      <a href="#" class="back-btn">◀️ Back</a>
    </div>
    <div v-if="post" class="container details-container">
      <div class="card">

		<h2 class="card-title">{{post.title}}</h2>
        <p class="card-details">
          {{post.details}}
        </p>

        <div class="example">
          <h3 class="example-title">Example</h3>
          <!-- <p class="example-details">Lorem ipsum dolor sit amet.</p> -->
          <pre id="example-code">
            {{post.example}}
          </pre>
          <a href="#" class="example-btn">Try Yourself</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import getCollection from '../composables/getCollection'
import getPost from '../composables/getPost'
export default {

	props: ['id'],
    setup(props){

        const {post, error, load} = getPost(props.id)
        load()

        return {post, error}
    }
	
}
</script>

<style scoped>
#details {
	min-height: 100vh;
	width: 100%;
	background: #f6f4fc 0% 0% no-repeat padding-box;
}
.details-container {
	min-height: calc(100vh - 100px);
	flex-direction: column;
}
.top-container {
	height: 100px;
	justify-content: flex-start;
}
.card {
	max-width: 450px;
	min-width: 450px;
	padding: 30px;
	box-shadow: 1px 1px 6px #a8a4afeb;
	background: #f6f4fc 0% 0% no-repeat padding-box;
	border-radius: 12px;
	font-size: 12px;
}
.card-title {
	margin-bottom: 20px;
	font-weight: bold;
}
.card-details {
	margin-bottom: 20px;
}
.example {
	background: #ddd5f5d6 0% 0% no-repeat padding-box;
	border-radius: 8px;
	padding: 20px;
}
.example-title {
	margin-bottom: 10px;
}
.example-details {
	margin-bottom: 20px;
}
#example-code {
	background-color: white;
	padding: 20px;
	border-radius: 8px;
	text-align: start;
}
.example-btn {
	display: inline-block;
	margin-top: 10px;
	padding: 10px 15px;
	background-color: royalblue;
	color: white;
	border-radius: 8px;
}


</style>