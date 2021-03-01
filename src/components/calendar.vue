<style lang="scss" scoped>
.container {
  width: 1000px;
  height: 500px;
}
</style>
<template lang="pug">
section.row.full-width.container.content-start.justify-start
  div(style=`height: 40px; padding: 10px`).row.full-width.items-center.justify-center.bg-grey
    span Table
  div(style=`height: 460px; overflow: auto`).row.full-width.content-start.b-red
    div(style=`width: 40px`).row.full-height
      div(v-for="day in 100" style=`position: sticky; left: 0; background-color: #eee;`).row.full-width.justify-center.q-pa-sm
        span {{day}}
    .col.b-red
      div(v-for="")
</template>
<script>
export default {
  name: 'calendar',
  data () {
    return {
    }
  },
  methods: {
    handleBlur(e) {
      console.log('blur', e.target.value)
    }
  },
  computed: {
    // Создание дефолтной даты со след 30 днями
    daysData() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate();
      let result = {}
      for(let i=0; i<30; i++) {
        let nextDays = new Date(year, month+1, date + i)
        result[i] = {}
        result[0][nextDays.getDate()+'.0'+nextDays.getMonth()] = ''
      }
      return result
    },
    // Создание дефолтной даты с часами
    hoursData() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate();
      let hour = today.getHours();
      let result = {}
      for(let i = 0; i < 24; i++) {
        let nextDays = new Date(year, month, date+1, hour + i)
        result[i] = {}
        result[0][nextDays.getHours()+':00'] = ''
      }
      return result
    },
    // Определение какую дату использовать
    myData() {
      switch(this.dataType) {
        case 'days':
          return this.daysData
          // break;
        case 'hours':
          return this.hoursData
          // break;
        case 'my':
          if (this.data) return this.data
          else return this.defaultData
        default:
          return this.defaultData
      }
    },
    // нахождение всех ключей свойства для создания колонок
    countMaxProperty() {
      let count = []
      for(let i = 0; i < Object.keys(this.myData).length; i++) {
        count.push(Object.keys(this.myData[Object.keys(this.myData)[i]]))
      }
      count = count.flat()
      let result = []
      for (let str of count) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
      return result
    }
  }
}
</script>
