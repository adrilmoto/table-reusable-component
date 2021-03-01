<style lang="scss" scoped>
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.tdrawer {
  position: sticky;
  left: 0;
  height: 100%;
}
.awesome-table {
  border: 1px solid #999;
  border-radius: 4px;
  width: 1000px;
  height: 500px;
  color: #333;
  overflow: auto;
  figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    img {
      border: 1px solid #bbb;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  table {
    border-collapse: collapse;
    overflow: auto;
    width: 100%;
    tr {
      border-bottom: 1px solid #eee;
    }
    th {
      top: 0;
      background: #fff;
      padding: 10px 5px;
      text-align: left;
      position: sticky;
      height: 50px;
      z-index: 100;
      box-shadow: 0px 1px 0px #999;
    }
    td {
      padding: 10px 10px;
      text-align: left;
      min-width: 150px;
      min-height: 40px !important;
      border: 1px solid #eee;
      align-items: center;
      justify-content: center;
    }
  }
}
.container {
  border-radius: 4px;
  border: 1px solid #999;
  background-color: #fff
}
.sticky-col {
  position: sticky;
  left: 0;
  background-color: #eee;
  padding: 10px;
  font-weight: 700;
  height: 100%;
  max-height: 70px;
  box-shadow: 1px 1px 0px #999;
  // border-right: 1px solid #999;
}
.icon {
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 50%;
}
input {
  height: 50px;
  margin: -5px;
  // background-color: transparent;
  border: 0px solid;
  padding: 0px 10px;
}
input:focus {
  outline: none;
  background-color:#eee;
}
input:hover {
  background-color: #eee;
}
.border-bottom {
  border-bottom: 1px solid #999;
}
</style>

<template lang="pug">
section.awesome-table
  table
    //- header
    thead
      tr
        th
        th(v-for="(column, columnIndex) in columns" :key="columnIndex")
          div(
            v-if="type === 'day'"
            ).row
            span {{ column.key + ':00'}}
          div(
            v-if="type === 'month'"
            ).row
            span {{ column.key + 1 +' day'}}
    //- body
    tbody
      tr(v-for="(row, rowIndex) in rows" :key="row.id")
        //- first col
        td(:style=`{minWidth: '50px',}`).sticky-col.row.item-center
          span {{ rowIndex + 1}}
        //- colls
        td(v-for="(column, columnIndex) in columns" :key="columnIndex")
          div(
            v-if="type === 'day'"
            :style=`{
              background: 'rgba(40,40,40,0.1)'
            }`
            ).row.full-width
            div(
              v-if="row[column.key]"
              ).row.full-width
              input(
                v-model="row[column.key].data"
                type="phone" maxlength="6")
            div(
              v-else
              ).row.full-width
              input(
                @input="$event => rowColumnChanged($event,row,rowIndex,column,columnIndex)"
                placeholder="..."
                type="phone" maxlength="6")
          div(
            v-if="row[column.key] && type === 'month'"
            ).row.full-width.justify-center
            div.icon
            //- span {{ row[column.key].data }}
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    type: {
      type: String,
      required: true,
    },
    rows: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  computed: {
    columns () {
      let columns = []
      if (this.type === 'day') {
        // columns
        for (let i = 0; i < 24; i++) {
          columns.push({
            key: i
          })
        }
      }
      if (this.type === 'month') {
        let daysCount = new Date(2021, 3, 0).getDate()
        for (let i = 0; i < daysCount; i++) {
          columns.push({
            key: i
          })
        }
      }
      return columns
    }
  },
  methods: {
    rowColumnChanged (e, row, rowIndex, column, columnIndex) {
      this.$log('rowColumnChanged', e.target.value, row, rowIndex, column, columnIndex)
      if (!row[column.key]) row[column.key] = {data: ''}
      row[column.key].data = e.target.value
    }
  }
}
</script>
