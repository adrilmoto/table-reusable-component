<template lang="pug">
.row.content-margin
  my-table(
    type="day"
    :rows="rows")
</template>

<script>
import myTable from '@/components/myTable.vue'

export default {
  name: 'Days',
  components: {
    myTable
  },
  data () {
    return {
      rows: [
        {id: 'r1', 0: {data: 'Good morning 1'}},
        {id: 'r2', 0: {data: 'Good morning 2'}},
        {id: 'r3', 0: {data: 'Good morning 3'}}
      ],
    }
  }
}
</script>
