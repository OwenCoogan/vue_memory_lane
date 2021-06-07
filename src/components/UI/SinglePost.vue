<template>
    <div class="w-1/3 shadow-sm content-center">
        <button
          type="button"
          class="btn-black"
          @click="close"
        ></button>
        <h2>{{ title }}x</h2>
          <div v-if="modalShow ===true" class="modal">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <p>{{ dateCreated }}</p>
        </div>
         
    </div> 
</template>
<script>
export default({
    
  methods: {
    closeModal(){
    }
  },
  mounted () {
  }  
})
</script>
