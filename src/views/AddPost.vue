<template>
  <div class="add-post">
    <h1>Ajouter un post</h1>
    <form
      v-on:submit.prevent="submitForm"
    >

      

      <p>
        <label for="name">Nom</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        >
      </p>

      <p>
        <label for="desc">Description</label>
        <input
          id="desc"
          v-model="desc"
          type="text"
          name="desc"
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
    return {
      form:{
          name: null,
          desc: null
      } 
    }
  },
  methods:{
        submitForm(){
            axios.post('http://localhost:6590/api/post/create', {
                name: this.name,
                description: this.desc,
              })
            
                 .then((res) => {
                     console.log(res)
                 })
                 .catch((error) => {
                      console.log(error)
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    

}
})
</script>
