<template>
    <div class="w-1/3 shadow-sm content-center">
        <h2>Liste de lieux</h2>
        <div class="post-holder" v-for="post in posts" :key="post.content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <p>{{ post.dateCreated }}</p>
        <button @click="showModal">Voir post</button>
        <div ref="modal" class="modal">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <p>{{ post.dateCreated }}</p>
        </div>
        </div>
    </div> 
</template>
<script>
import axios from 'axios'
export default({
    data () {
    return {
      posts: [],
    }
  },
  methods: {
    async fetchData () {
        const res = await axios.get('http://localhost:6590/api/posts', {
        })

        this.posts = res.data
    },
    showModal() {
      
    console.log("show modal")
    }
  },
  mounted () {
    this.fetchData()
  }  
})
</script>
