<template>
    <div class="w-1/3 shadow-sm content-center">
        <h2 class="font-semibold">Liste de lieux</h2>
        <div class="post-list">
          <div class="post-holder"  v-for="post in posts" :ref="'modal-'+post._id" :key="post.content" >
          <h2 class="font-medium">{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <p>{{ post.dateCreated }}</p>
          <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" @click="showModal(post._id)">Voir post</button>
          
            <div class="MyModal" :ref="post._id"  >
              <div class="modal-backdrop"></div>
              <div class="modal-content">
                <h2 class="font-medium">{{ post.title }}</h2>
                <p>{{ post.content }}</p>
                <p>{{ post.dateCreated }}</p>
                <button class="close-button" @click="removeModal(post._id)">X</button>
              </div>
            </div>
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
    showModal(id) {
    this.$refs[id][0].classList.add('MyModalActive')
    },
    removeModal(id) {
    this.$refs[id][0].classList.remove('MyModalActive')
    }
  },
  mounted () {
    this.fetchData()
  }  
})
</script>
