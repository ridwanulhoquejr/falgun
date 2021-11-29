<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <postList :posts="posts" />
    </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import postList from './postList.vue'
export default {

    components: [postList],
    setup(props){

    const { posts, error, load } = getPosts()
    load()
    // console.log(posts)
    return { posts, error }
    }

}
</script>

<style>

</style>