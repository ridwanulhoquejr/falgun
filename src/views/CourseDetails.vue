<template>
  <section id="details">
    <div class="container top-container">
      <a href="#" class="back-btn">◀️ Back</a>
    </div>
    <div class="container details-container">
      <div class="card">
        <h2 class="card-title">Boolean Types</h2>
        <p class="card-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur itaque, voluptas facilis soluta
          corporis inventore deleniti! Voluptatem ipsum iste illo perferendis. Explicabo voluptate quam illum ex fugit
          at vel.
        </p>
        <div class="example">
          <h3 class="example-title">Example</h3>
          <p class="example-details">Lorem ipsum dolor sit amet.</p>
          <pre id="example-code">
            test
          </pre>
          <a href="#" class="example-btn">Try Example</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scopped>
#details {
	min-height: 100vh;
	width: 100%;
	background: #f6f4fc 0% 0% no-repeat padding-box;
}
.details-container {
	min-height: calc(100vh - 50px);
	flex-direction: column;
}
.top-container {
	height: 100px;
	justify-content: flex-start;
}
.card {
	max-width: 550px;
	padding: 30px;
	box-shadow: 0px 3px 6px #a8a4afeb;
	background: #f6f4fc 0% 0% no-repeat padding-box;
	border-radius: 12px;
}
.card-title {
	margin-bottom: 20px;
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