<template lang="pug">
router-view
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  methods: {
    // ...mapActions(['fetchData'])
  },
  computed: {
  },
  mounted () {
    // this.fetchData()
  }
}
</script>

<style lang="scss">
// custom
.content-margin {
  margin-top: 50px;
}
/* app */
body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
}
/* flex */
.row, .column {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  min-width: 0;
  max-width: 100%;
}
.column {
  flex-direction: column
}
.wrap {
  flex-wrap: wrap;
}
.no-wrap {
  flex-wrap: nowrap;
}
/* width/height */
.full-width {
  width: 100%
}
.col {
  width: auto;
  min-width: 0%;
  max-width: 100%;
}
.full-height {
  height: 100%
}
.window-height {
  height: 100vh
}
/* items-XXX */
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-stretch {
  align-items: stretch;
}
.items-baseline {
  align-items: baseline;
}
/* justify-XXX */
.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}
/* self-XXX */
.self-start {
  align-self: flex-start
}
.self-end {
  align-self: flex-end
}
.self-center {
  align-self: center
}
.self-baseline {
  align-self: baseline
}
.self-stretch {
  align-self: stretch
}
/* content-XXX */
.content-start {
  align-content: flex-start
}
.content-end {
  align-content: flex-end
}
.content-center {
  align-content: center
}
.content-stretch {
  align-content: stretch
}
.content-between {
  align-content: space-between
}
.content-around {
  align-content: space-around
}
/* bg-XXX */
.bg-primary {
  background: #0c5030;
}
.bg-white {
  background: white
}
.bg-grey {
  background: #eee
}
.bg-red {
  background: red
}
/* paddings */
.q-pa-xs {
  padding: 4px;
}
.q-pa-sm {
  padding: 8px;
}
.q-pa-md {
  padding: 16px;
}
/* margins */
.q-ma-sm {
  margin: 8px;
}
.q-ma-md {
  margin: 16px;
}
/* text */
#h1 {
  font-size: 20px;
  font-weight: bold;
}
#h2 {
  font-size: 14px;
  font-weight: 400;
}
/* borders */
.b-primary {
  border: 1px solid black;
}
.b-red {
  border: 1px solid #fa0000;
}
.b-grey {
  border: 1px solid #eee;
}
/* other */
.rounded {
  border-radius: 4px;
}
</style>
