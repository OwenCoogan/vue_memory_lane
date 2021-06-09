<template>
  <div class="add-post">
    <h1>Ajouter un post</h1>
    <form
      v-on:submit.prevent="submitForm"
    >

      

      <p>
        <label for="title">Titre</label>
        <input
          id="title"
          v-model="title"
          type="text"
          name="title"
        >
      </p>

      <p>
        <label for="desc">Description</label>
        <input
          id="content"
          v-model="content"
          type="content"
          name="content"
        >
      </p>

      <p>
        <input
          type="submit"
          value="Submit"
        >
      </p>

    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default({
  setup() {
    
  },
  data() {
    const position = JSON.parse(localStorage.getItem("coordinates"))
    return {
      form:{
          title: null,
          content: null,
          gpsPositionLat: position.lat,
          gpsPositionLong: position.lng
      } 
    }
  },
  methods:{
        submitForm(){
          const position = JSON.parse(localStorage.getItem("coordinates"))
            axios.post('http://localhost:6590/v1/post/create', {
                title: this.title,
                content: this.content,
                gpsPositionLat: position.lat,
                gpsPositionLong: position.lng
              })
            
                 .then((res) => {
                     console.log(res)
                 })
                 .catch((error) => {
                      console.log(error)
                 })
        }
    

}
})
</script>
