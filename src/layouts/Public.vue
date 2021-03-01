<style lang="scss" scoped>
#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #42b983;
    padding: 10px;
    border: 2px solid #42b983;
    margin: 5px;
    text-decoration: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.router-link-exact-active {
      color: white;
      border: 2px solid white;
      font-size: 20px
    }
  }
}
</style>

<template lang="pug">
.row.full-width.full-height.justify-center
  //- nav
  div(id="nav").row.full-width.justify-start.bg-primary.q-pa-md
    router-link(
      v-for="page in pages" :key="page.id"
      :to="{name: page.id}"
    ) {{ page.name }}
  router-view
</template>

<script>
export default {
  name: 'PublicLayout',
  computed: {
    pages () {
      return [
        {id: 'home', name: 'Home'},
        {id: 'days', name: 'Days'},
        {id: 'months', name: 'Months'}
      ]
    }
  }
}
</script>
