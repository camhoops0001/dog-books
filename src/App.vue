<template>
  <body>
  <nav>
    <router-link to="/">Home | </router-link>
    <router-link to="/favorite" @click="reload"> Favorite Dog | </router-link>
    <router-link to="/saved-books">Saved Books</router-link>
  </nav>
  <router-view/>
  </body> 
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    reload() {
      if(window.location.href.indexOf("favorite") > -1) {
        window.location.reload();
      }
    }
  },
})
</script>

<style>
body {
  background-color: #000000;
}

nav a {
  font-weight: bold;
  color: lightgray;
  text-decoration: none;
}
</style>
