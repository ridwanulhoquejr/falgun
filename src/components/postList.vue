<template>
    <div v-for="post in posts" :key="post.id">
      <singlePost :post="post" />
    </div>
</template>

<script>
import singlePost from '../components/singlePost.vue'
export default {
    props: ['posts'],
  components: { singlePost },

}
</script>

<style>

</style>