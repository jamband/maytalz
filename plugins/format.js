import Vue from 'vue'

Vue.prototype.$format = {
  date: (value) => {
    const date = new Date(value)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = (date.getDate()).toString().padStart(2, '0')
    return `${year}.${month}.${day}`
  }
}
