<template>
  <div class="home flex-1">
    <Map/>
    <PostList/>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '../components/UI/Map'
import PostList from '../components/UI/PostList'

export default {
  name: 'Home',
  components: {
    Map,
    PostList
  }
}
</script>
