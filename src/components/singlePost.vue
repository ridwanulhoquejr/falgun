<template>

    <div class="container post-list ">
      <div class="lesson-wrapper">

      <section id="lessons-details">
        <div>

          <router-link :to="{ name: 'CourseDetails', params: { id: post.id }}">
            <h3 class="content-list-title">{{ post.title }}</h3>
          </router-link>

        </div>
      </section>

    
  </div>
    
  </div>
</template>

<script>
export default {
    props: ['post'],
    setup(){

    }

}
</script>

<style>
.container.post-list{
  padding-top: 10px;
}
.content-list-title{
  font-weight: lighter;
  font-size: 18px ;
}
.content-list-title:hover{
  color: white;
}
</style>