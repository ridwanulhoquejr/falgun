<template>

    <div class="container post-list ">
      <div class="lesson-wrapper">

      <section id="lessons-details">
        <div>

          <router-link :to="{ name: 'CourseDetails', params: { id: post.id }}">
            <h4>{{ post.title }}</h4>
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
  padding-top: 20px;
}

</style>