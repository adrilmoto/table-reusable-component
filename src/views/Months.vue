<template lang="pug">
.row.content-margin
  my-table(
    type="month"
    :rows="rows")
</template>

<script>
import myTable from '@/components/myTable.vue'

export default {
  name: 'Months',
  components: {
    myTable
  },
  data () {
    return {
      rows: [
        {id: 'r1', 5: {data: 'Good day to die 1'}},
        {id: 'r2', 2: {data: 'Good day to die 2'}},
        {id: 'r3', 1: {data: 'Good day to die 3'}},
        {id: 'r4', 1: {data: 'Good day to die 4'}},
        {id: 'r5', 1: {data: 'Good day to die 5'}, 2: {data: 'Breakfast'}},
        {id: 'r6', 1: {data: 'Good day to die 6'}},
        {id: 'r7', 1: {data: 'Good day to die 7'}},
        {id: 'r8', 5: {data: 'Good day to die 1'}},
        {id: 'r9', 2: {data: 'Good day to die 2'}},
        {id: 'r10', 1: {data: 'Good day to die 3'}},
        {id: 'r11', 1: {data: 'Good day to die 4'}},
        {id: 'r12', 1: {data: 'Good day to die 5'}, 2: {data: 'Breakfast'}},
        {id: 'r13', 1: {data: 'Good day to die 6'}},
        {id: 'r14', 1: {data: 'Good day to die 7'}}
      ]
    }
  }
}
</script>
